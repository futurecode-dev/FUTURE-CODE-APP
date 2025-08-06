import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  project?: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Parse request body
    const formData: ContactFormData = await req.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, and message are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission from ${formData.name}`
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          <p style="color: #e0e6ed; margin: 10px 0 0 0;">FutureCode Agency</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 25px;">
            <h3 style="color: #333; margin: 0 0 10px 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 5px;">Contact Information</h3>
            <p style="margin: 8px 0; color: #555;"><strong>Name:</strong> ${formData.name}</p>
            <p style="margin: 8px 0; color: #555;"><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #667eea; text-decoration: none;">${formData.email}</a></p>
            ${formData.company ? `<p style="margin: 8px 0; color: #555;"><strong>Company:</strong> ${formData.company}</p>` : ''}
            ${formData.project ? `<p style="margin: 8px 0; color: #555;"><strong>Project Type:</strong> ${getProjectTypeLabel(formData.project)}</p>` : ''}
          </div>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 5px;">Message</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
              <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px; margin: 0;">
              Submitted on ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </div>
      </div>
    `

    // Send email using Resend API (you'll need to set up Resend and add your API key)
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    const companyEmail = Deno.env.get('COMPANY_EMAIL') || 'hello@futurecode.dev'

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FutureCode Contact Form <noreply@futurecode.dev>',
        to: [companyEmail],
        reply_to: formData.email,
        subject: emailSubject,
        html: emailBody,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Email sending failed:', errorData)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const emailResult = await emailResponse.json()
    console.log('Email sent successfully:', emailResult)

    // Send confirmation email to the user
    const confirmationEmailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1>
          <p style="color: #e0e6ed; margin: 10px 0 0 0;">FutureCode Agency</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #555; font-size: 16px; line-height: 1.6;">Hi ${formData.name},</p>
          
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to FutureCode! We've received your message and our team will review it shortly.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="color: #333; margin: 0 0 10px 0;">What happens next?</h3>
            <ul style="color: #555; margin: 0; padding-left: 20px;">
              <li style="margin: 8px 0;">Our team will review your inquiry within 24 hours</li>
              <li style="margin: 8px 0;">We'll schedule a consultation call to discuss your project</li>
              <li style="margin: 8px 0;">You'll receive a detailed proposal tailored to your needs</li>
            </ul>
          </div>
          
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our <a href="#portfolio" style="color: #667eea; text-decoration: none;">portfolio</a> 
            or learn more about our <a href="#services" style="color: #667eea; text-decoration: none;">services</a>.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #555; font-size: 16px; margin: 0;">
              Best regards,<br>
              <strong style="color: #333;">The FutureCode Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px; margin: 0;">
              If you have any urgent questions, please call us at +1 (555) 123-FUTURE
            </p>
          </div>
        </div>
      </div>
    `

    // Send confirmation email
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FutureCode Team <hello@futurecode.dev>',
        to: [formData.email],
        subject: 'Thank you for contacting FutureCode!',
        html: confirmationEmailBody,
      }),
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully! We\'ll get back to you within 24 hours.' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})

function getProjectTypeLabel(projectType: string): string {
  const labels: { [key: string]: string } = {
    'ai-ml': 'AI & Machine Learning',
    'mobile': 'Mobile Development',
    'web': 'Web Development',
    'cloud': 'Cloud Solutions',
    'security': 'Cybersecurity',
    'other': 'Other'
  }
  return labels[projectType] || projectType
}