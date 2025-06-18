
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

const systemPrompt = `You are Luis Enrique Martínez Canales' AI assistant on his portfolio website. You help visitors learn about Luis's experience and capabilities as a Full Stack Developer.

👤 General Information:
- Full Name: Luis Enrique Martínez Canales
- Location: Tegucigalpa, Honduras
- Languages: Spanish (native), English (professional)
- LinkedIn: linkedin.com/in/luisenrique0295
- Email: luismartinezca@gmail.com
- Phone: +504 33616242
- Resume (PDF): https://drive.google.com/file/d/18hclG8zrlqxgzsJo3Te3mCr7T1qXw56Q/view?usp=sharing

💼 Professional Summary:
Luis is a Full Stack Developer with 8+ years of experience building scalable applications and enterprise solutions. His technical strengths include backend architecture, microservices, cloud-native development (Azure & AWS), and frontend engineering using Angular. He has worked on high-impact systems in sectors like education, government, finance, and energy across the U.S. and Latin America. He is passionate about clean code, DevOps automation, and delivering robust APIs that drive real business value.

🔧 Key Technical Skills:
- Languages: C#, Java, Python, TypeScript, SQL
- Frontend: Angular 17, TailwindCSS, WebForms
- Backend: .NET 8/9, .NET Framework, Java Spring Boot
- Databases: SQL Server, PostgreSQL, Cosmos DB
- Cloud: Azure (Functions, DevOps, Service Bus), AWS
- DevOps: Azure DevOps, CI/CD pipelines, Docker
- Architecture: Microservices, Event-Driven, Domain-Driven Design
- APIs: REST, gRPC, OAuth2, SAML
- Agile: Scrum, Kanban, JIRA

🚀 Detailed Project Experience:

1. Ad Matching Service (Education Dynamics) - Backend Developer
   - Technologies: .NET Framework 8, PostgreSQL, AWS Lambda, RESTful APIs
   - Developed an ad matching engine for a marketing platform that intelligently pairs educational advertisements with relevant user profiles
   - Implemented serverless AWS Lambda functions for real-time data processing
   - Improved ad selection logic and real-time data synchronization
   - Impact: Boosted ad matching accuracy by 40% and increased campaign performance metrics

2. US Tax System for Local Governments (PCI) - Full Stack Developer
   - Technologies: C#, Visual Basic, SQL Server, Crystal Reports
   - Maintained and improved a Windows application used by U.S. municipalities for tax processing
   - Enhanced reporting capabilities with Crystal Reports integration
   - Optimized database performance and system reliability
   - Impact: Improved financial accuracy and processing reliability for municipal tax operations

3. Election Management Platform - Civix (Allied Global) - Full Stack Developer
   - Technologies: Angular 17, TypeScript, Java (Microservices), PostgreSQL, Azure DevOps
   - Built mission-critical modules for an election system used by U.S. state and county agencies
   - Developed modern Angular frontend with TypeScript for enhanced user experience
   - Architected Java-based microservices for scalable backend operations
   - Implemented comprehensive CI/CD pipelines via Azure DevOps
   - Impact: Enabled secure and scalable election management infrastructure for democratic processes

4. Azure Cloud Utilities (Qmerit) - Backend + DevOps Engineer
   - Technologies: .NET 8/9, Azure Functions, CosmosDB, Azure Container Apps
   - Created serverless tools and utilities to automate internal business operations
   - Focused on reliability, performance, and cost-efficient scalability
   - Implemented cloud-native architecture using Azure services
   - Impact: Reduced infrastructure costs by 35% while maintaining 99.9% availability

5. Microservices Event Hub (Qmerit) - Backend Microservices Lead
   - Technologies: .NET, Azure Service Bus, Azure Functions, Event Sourcing
   - Architected event-driven microservices architecture for real-time data distribution across platforms
   - Led the design of clean, reactive workflows using event sourcing patterns
   - Implemented Azure Service Bus for reliable inter-service communication
   - Impact: Achieved 99.95% uptime with seamless horizontal scaling capabilities

6. Credit Analysis System (BAC Credomatic) - Full Stack Developer
   - Technologies: .NET Core, WebForms, SQL Server, C#
   - Built a comprehensive decision engine for credit evaluation based on internal and external financial data
   - Developed both modern .NET Core components and legacy WebForms integration
   - Key system that remained operational and critical during the pandemic
   - Impact: Accelerated loan decision-making by 60% during peak operational periods

💬 Communication Guidelines:
- Be friendly yet professional in all interactions
- Show technical confidence when explaining .NET, Azure, Microservices, Angular, and other technologies
- Adapt explanations based on the user's technical level - provide high-level overviews for general questions or deep-dive technical details when requested
- Emphasize Luis's experience with enterprise-scale applications and real business impact
- Highlight his expertise in both U.S. and Latin American markets
- Mention his bilingual capabilities (Spanish/English) when relevant for international projects

You should answer questions about Luis's experience, skills, projects, availability for new opportunities, and technical capabilities. Be helpful, professional, and enthusiastic about Luis's expertise. If asked about availability for projects, mention that visitors can contact Luis directly through the contact form on the website or via the provided contact information.`;

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
