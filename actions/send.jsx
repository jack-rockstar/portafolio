'use server'
import nodemailer from 'nodemailer'

export const sendEmail = async ({ correo }) => {
  const template = `
  <!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi CV - Jack Najarro Cuadros</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
    }

    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .header {
      text-align: center;
      margin-bottom: 30px;
    }

    .header h1 {
      margin: 0;
      color: #333333;
    }

    .header p {
      font-size: 18px;
      color: #777777;
    }

    .message {
      font-size: 16px;
      color: #555555;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .cta {
      text-align: center;
      margin-top: 20px;
    }

    .cta a {
      background-color: #007BFF;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
    }

    .footer {
      text-align: center;
      margin-top: 30px;
      font-size: 14px;
      color: #777777;
    }

    .footer a {
      color: #007BFF;
      text-decoration: none;
    }
  </style>
</head>

<body>

  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>Jack Najarro Cuadros</h1>
      <p>Tecnico en Computacion e Informatica | Desarrollador Fullstack</p>
    </div>

    <!-- Message -->
    <div class="message">
      <p>Estimado/a</p>
      <p>Mi nombre es Jack Najarro Cuadros tengo  experiencia en desarrollo de aplicaciones web y backend. Te envío mi CV con el objetivo de que puedas conocer más sobre mi trayectoria profesional, mis habilidades y cómo podría aportar valor a tu equipo.</p>
      <p>Estoy interesado en formar parte de proyectos que impliquen nuevos retos y aprendizaje constante. Si tienes alguna duda o necesitas más información sobre mi perfil, no dudes en escribirme.</p>
      <p>Estoy disponible para conversar en cualquier momento conveniente y espero con entusiasmo la oportunidad de colaborar contigo.</p>
      <p>Gracias por tu tiempo y consideración.</p>
      <p>Saludos cordiales,</p>
      <p><strong>Jack Najarro Cuadros</strong><br>
        Tecnico en Computacion e Informatica | Desarrollador Fullstack</p>
    </div>

    <div class="cta">
      <p><strong>Haz clic en los siguientes enlaces para conocer más sobre mí:</strong></p>
      <a href="${process.env.URL_CV}" target="_blank">Ver mi CV</a>
      <a href="https://www.linkedin.com/in/jack-najarro-cuadros-b13aa4219/" target="_blank">Ver mi LinkedIn</a>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>Si tienes alguna pregunta o deseas contactarme directamente, puedes escribirme a <a href="mailto:jacknajarro1@gmail.com">jacknajarro1@gmail.com</a>.</p>
    </div>
  </div>

</body>

</html>
`

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: correo,
      subject: 'Curriculum Vitae Jack Najarro', // Asunto
      html: template
    }
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.log('[ERROR ENVIO CORREO]', error)
  }
}
