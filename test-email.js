const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmailConfiguration() {
  console.log('🔍 Testing Email Configuration...\n');
  
  // Check environment variables
  console.log('📋 Environment Variables:');
  console.log(`EMAIL_USER: ${process.env.EMAIL_USER ? '✅ Set' : '❌ Missing'}`);
  console.log(`EMAIL_PASS: ${process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing'}`);
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('\n❌ Missing email configuration. Please check your .env.local file.');
    return;
  }

  const emailDomain = process.env.EMAIL_USER.split('@')[1];
  console.log(`\n📧 Email Domain: ${emailDomain}`);

  // Test configurations to try
  const configurations = [
    {
      name: 'Gmail Service (if Gmail)',
      config: emailDomain === 'gmail.com' ? {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      } : null
    },
    {
      name: 'Gmail SMTP (Generic)',
      config: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      }
    },
    {
      name: 'Domain-specific SMTP',
      config: {
        host: `mail.${emailDomain}`,
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      }
    },
    {
      name: 'Alternative Gmail SMTP (Port 465)',
      config: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      }
    }
  ];

  for (const { name, config } of configurations) {
    if (!config) continue;
    
    console.log(`\n🔧 Testing: ${name}`);
    console.log(`   Host: ${config.host || config.service}`);
    console.log(`   Port: ${config.port || 'default'}`);
    console.log(`   Secure: ${config.secure || false}`);
    
    try {
      const transporter = nodemailer.createTransport(config);
      await transporter.verify();
      console.log(`   ✅ SUCCESS: ${name} works!`);
      
      // If successful, try sending a test email
      console.log('   📤 Sending test email...');
      const testMail = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to self for testing
        subject: '🧪 Email Configuration Test - WE DO TAX',
        text: 'This is a test email to verify your email configuration is working correctly.',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #0B3D91;">✅ Email Configuration Test Successful!</h2>
            <p>Your email configuration is working correctly.</p>
            <p><strong>Configuration:</strong> ${name}</p>
            <p><strong>Email:</strong> ${process.env.EMAIL_USER}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `
      };
      
      await transporter.sendMail(testMail);
      console.log('   ✅ Test email sent successfully!');
      console.log('\n🎉 Email configuration is working! You can now use the contact form.');
      return;
      
    } catch (error) {
      console.log(`   ❌ FAILED: ${error.message}`);
    }
  }

  console.log('\n❌ All configurations failed. Please check:');
  console.log('1. Your email address and password are correct');
  console.log('2. If using Gmail, you need an "App Password" (not your regular password)');
  console.log('3. 2-factor authentication must be enabled for Gmail');
  console.log('4. For custom domains, contact your email provider for SMTP settings');
  console.log('\n📖 See EMAIL_SETUP.md for detailed instructions.');
}

// Run the test
testEmailConfiguration().catch(console.error); 