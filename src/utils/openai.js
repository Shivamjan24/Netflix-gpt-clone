import OpenAI from 'openai';
import { OPEN_AI_API } from './constants';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true 
});

export default openai;