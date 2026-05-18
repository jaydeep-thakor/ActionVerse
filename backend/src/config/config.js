import dotenv from "dotenv"
dotenv.config();

const requiredEnvVars = ["DATABASE_URI", "PORT", "JWT_SECRET"];

for(const envVar of requiredEnvVars){
    if(!process.env[envVar]){
        throw new Error(`missing required environment variable: ${envVar}`);
    }
}

const config = {
    "DATABASE_URI": process.env.DATABASE_URI,
    "PORT": process.env.PORT,
    "JWT_SECRET": process.env.JWT_SECRET
}

export default config;