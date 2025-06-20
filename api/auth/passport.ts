import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
    try {
        // Aqui você encontra ou cria o usuário no banco
        const user = {
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName
        };
        console.log("user passport"+user);
        
        // Passe o usuário para o próximo middleware
        done(null, user);
    } catch (err) {
        done(err, null);
    }
}));
