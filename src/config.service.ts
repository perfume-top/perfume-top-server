import { Injectable } from '@nestjs/common';
import { resolve } from "path";
import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import * as fs from 'fs';

export interface EnvConfig {
    [key: string]: string;
}

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig;

    constructor(filePath: string) {
        console.log(`load env at ${filePath}`);
        this.envConfig = this.validateInput(dotenv.parse(fs.readFileSync(filePath)));
    }
  
    // get(key: string): string {
    //   return this.envConfig[key];
    // }

    get LOCAL_STATIC_ROOT() {
      return this.envConfig.LOCAL_STATIC_ROOT;
    }
    get LOCAL_WEB_ROOT(): string {
      return this.envConfig.LOCAL_WEB_ROOT;
    }
    get STATIC_PREFIX(): string {
      return this.envConfig.STATIC_PREFIX;
    }
    get TEMP_FLODER() {
      return this.envConfig.TEMP_FLODER;
    }

    get uploadTempFolder(): string {
        return this.resolveLocal(this.envConfig.TEMP_FLODER);
    }

    get userAvatarFolder(): string {
        return this.resolveLocal(this.envConfig.USER_AVATAR_FLODER);
    }

    private resolveLocal(str: string) {
        return resolve(this.envConfig.LOCAL_STATIC_ROOT, str);
    }
    // resolveStaticRoot(...str: string[]) {
    //   return resolve(this.envConfig.SITE_STATIC_ROOT, ...str);
    // }

    private validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
          NODE_ENV: Joi.string()
            .valid(['development', 'production', 'test', 'provision'])
            .default('development'),
            LOCAL_STATIC_ROOT: Joi.string().required(),
            LOCAL_WEB_ROOT: Joi.string().required(),
            STATIC_PREFIX: Joi.string().required(),
            TEMP_FLODER: Joi.string().required(),
            USER_AVATAR_FLODER: Joi.string().required(),
          // PORT: Joi.number().default(3000),
          // API_AUTH_ENABLED: Joi.boolean().required(),
        });
    
        const { error, value: validatedEnvConfig } = Joi.validate(
          envConfig,
          envVarsSchema,
        );
        if (error) {
          throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
}

export let config: ConfigService = new ConfigService(`${process.env.NODE_ENV}.env`);