import "dotenv/config"
import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import './auth/passport.js'; // importa a config
const app = express();
const PORT = Number(process.env.PORT) || 5000;
const JWT_SECRET = process.env.JWT_SECRET as string
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(passport.initialize()); // sem sessões

app.get('/me', (req,res)=>{
  const cookies = req.cookies;
  console.log(JSON.stringify(cookies, null, 2));
  
  
  const token = req.cookies?.token ?? null
  res.json({token});
});

app.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));


// Callback que o Google redireciona após login
app.get('/auth/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
      // Aqui o user vem do done() do strategy
      const user: any = req.user;
      console.log("user"+ JSON.stringify(user, null, 2));
      

      // Gere um JWT
      const token = jwt.sign(user, JWT_SECRET, {
          expiresIn: '1h'
      });

      // Redirecione com token ou envie como resposta (ideal: frontend pega o token)
      res
      .cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      })
      .redirect("http://localhost:5173/");
  }
);



app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
