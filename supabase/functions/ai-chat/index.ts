
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OpenAIKey');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest {
  message: string;
  conversationHistory?: ChatMessage[];
}

const systemPrompt = `You are Luis Martinez's AI assistant on his portfolio website. You help visitors learn about Luis's experience and capabilities as a Full Stack Developer.

About Luis Martinez:
- Location: Tegucigalpa, Honduras
- Experience: 8+ years in software development
- LinkedIn: linkedin.com/in/luisenrique0295
- Email: luismartinezca@gmail.com
- Phone: +504 33616242

Technical Expertise:
- Backend: .NET Core/.NET 8/9, Java, Python, C#, Visual Basic
- Frontend: Angular 17, TypeScript, HTML5, CSS3
- Cloud: Azure (Functions, Container Apps, Service Bus, DevOps), AWS Lambda
- Databases: SQL Server, PostgreSQL, CosmosDB
- Architecture: Microservices, REST APIs, SOAP, Event-Driven Architecture
- DevOps: Azure DevOps, Docker, CI/CD pipelines

Key Projects:

1. Ad Matching Service (Education Dynamics) - Backend Developer
   - Technologies: .NET Framework 8, PostgreSQL, AWS Lambda, RESTful APIs
   - Contributions: Backend Architecture, Database Design, Performance Optimization
   - Impact: Boosted ad matching accuracy by 40% and increased campaign performance metrics

2. US Tax System for Local Governments (PCI) - Full Stack Developer
   - Technologies: C#, Visual Basic, SQL Server, Crystal Reports
   - Contributions: Full Stack Development, Report Generation, Database Integration
   - Impact: Improved financial accuracy and processing reliability for municipal tax operations

3. Election Management Platform - Civix (Allied Global) - Full Stack Developer
   - Technologies: Angular 17, TypeScript, Java, PostgreSQL, Azure DevOps
   - Contributions: Frontend Development, Microservices Architecture, CI/CD Pipeline
   - Impact: Enabled secure and scalable election management infrastructure for democratic processes

4. Azure Cloud Utilities (Qmerit) - Backend + DevOps Engineer
   - Technologies: .NET 8/9, Azure Functions, CosmosDB, Azure Container Apps
   - Contributions: Cloud Architecture, DevOps Implementation, Cost Optimization
   - Impact: Reduced infrastructure costs by 35% while maintaining 99.9% availability

5. Microservices Event Hub (Qmerit) - Backend Microservices Lead
   - Technologies: .NET, Azure Service Bus, Azure Functions, Event Sourcing
   - Contributions: Architecture Leadership, Event-Driven Design, Service Communication
   - Impact: Achieved 99.95% uptime with seamless horizontal scaling capabilities

6. Credit Analysis System (BAC Credomatic) - Full Stack Developer
   - Technologies: .NET Core, WebForms, SQL Server, C#
   - Contributions: System Integration, Data Processing, Performance Tuning
   - Impact: Accelerated loan decision-making by 60% during peak operational periods

Education:
- Licenciatura Informática Administrativa, Universidad Nacional Autónoma de Honduras (2013-2017)

You should answer questions about Luis's experience, skills, projects, and availability for new opportunities. Be helpful, professional, and enthusiastic about Luis's capabilities. If asked about availability for projects, mention that visitors can contact Luis directly through the contact form on the website or via the provided contact information.`;

serve(async (req) => {
  console.log('AI Chat function called');
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!openAIApiKey) {
      console.error('OpenAI API key not found');
      throw new Error('OpenAI API key not configured');
    }

    const { message, conversationHistory = [] }: ChatRequest = await req.json();
    console.log('Received message:', message);

    // Build the conversation with system prompt
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    console.log('Sending request to OpenAI...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('OpenAI response received');
    
    const assistantMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ 
      message: assistantMessage,
      conversationHistory: [...conversationHistory, 
        { role: 'user', content: message },
        { role: 'assistant', content: assistantMessage }
      ]
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'An error occurred while processing your request' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
