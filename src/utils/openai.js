import OpenAI from 'openai';
import { OPEN_AI_API } from './constants';

const openai = new OpenAI({
  apiKey: OPEN_AI_API,
  dangerouslyAllowBrowser: true 
});

export default openai;