const questions = [
  {
    question: "What is cloud computing?",
    options: [
      "A method of storing data on physical hard drives",
      "A way to connect local servers to a network",
      "A type of software used for data analysis",
      "The delivery of computing services over the internet"
    ],
    correctIndex: 3
  },
  {
    question: "Which of the following is NOT typically included in cloud computing services?",
    options: ["Printers", "Servers", "Storage", "Databases"],
    correctIndex: 0
  },
  {
    question: "What is one major benefit of cloud computing?",
    options: [
      "Higher operating costs",
      "Faster innovation",
      "Limited scalability",
      "Fixed resource allocation"
    ],
    correctIndex: 1
  },
  {
    question: "In cloud computing, what do you typically pay for?",
    options: [
      "Hardware maintenance",
      "All available services regardless of usage",
      "A fixed monthly fee for unlimited services",
      "Only the services you use"
    ],
    correctIndex: 3
  },
  {
    question: "Which of the following is a key advantage of cloud computing?",
    options: [
      "Flexible resource allocation",
      "Higher upfront investment",
      "Increased infrastructure continuity",
      "Manual scaling of resources"
    ],
    correctIndex: 0
  },
  {
    question: "What does the shared responsibility model describe?",
    options: [
      "The division of security and management tasks between client and provider",
      "The pricing structure of cloud services",
      "The types of cloud deployment models",
      "How cloud providers manage their own data centers"
    ],
    correctIndex: 0
  },
  {
    question: "In the shared responsibility model graphic, what does dark blue represent?",
    options: [
      "Azure provided responsibilities",
      "Unassigned responsibilities",
      "Responsibilities shared by both parties",
      "Client provided responsibilities"
    ],
    correctIndex: 3
  },
  {
    question: "What does a half-shaded area represent in the shared responsibility model graphic?",
    options: [
      "Responsibilities shared by both client and provider",
      "Responsibilities not assigned",
      "Responsibilities only handled by the client",
      "Responsibilities only handled by Azure"
    ],
    correctIndex: 0
  },
  {
    question: "Why is understanding the shared responsibility model important?",
    options: [
      "To choose the best cloud provider",
      "To avoid cloud services errors",
      "To determine who is responsible for specific tasks",
      "To reduce the cost of cloud services"
    ],
    correctIndex: 2
  },
  {
    question: "What defines a public cloud model?",
    options: [
      "Services are hosted on-premises",
      "Resources are shared only within one organization",
      "Services are offered over the internet by third-party providers",
      "Only government entities can access it"
    ],
    correctIndex: 2
  },
  {
    question: "Which cloud model is owned and operated by the client?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
    correctIndex: 1
  },
  {
    question: "What is a hybrid cloud?",
    options: [
      "A cloud model used only for backups",
      "A cloud model that combines multiple private clouds",
      "A combination of public and private cloud environments",
      "A cloud model used only by government agencies"
    ],
    correctIndex: 2
  },
  {
    question: "Which cloud model is most secure?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
    correctIndex: 1
  },
  {
    question: "Which cloud model is least secure?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Government cloud"],
    correctIndex: 0
  },
  {
    question: "Which use case below is best suited for public cloud based on security alone?",
    options: [
      "Storing highly sensitive financial data",
      "Development and testing environments",
      "Regulatory compliance",
      "High control over infrastructure"
    ],
    correctIndex: 1
  },
  {
    question: "Which use case below is ideal for private cloud?",
    options: [
      "Hosting public websites",
      "Temporary workloads",
      "Storing sensitive personal data",
      "Rapid prototyping"
    ],
    correctIndex: 2
  },
  {
    question: "Which use below case fits hybrid cloud?",
    options: [
      "Hosting static websites",
      "Running only internal apps",
      "Optimizing workloads across public and private environments",
      "Storing backups only"
    ],
    correctIndex: 2
  },
  {
    question: "What is a benefit of public cloud for storage?",
    options: [
      "Limited capacity",
      "Cost-effective and scalable",
      "Requires VPN access",
      "It adds redundancy to on-premises storage"
    ],
    correctIndex: 1
  },
  {
    question: "Which cloud model supports Exchange Online with on-prem sync?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Legacy cloud"],
    correctIndex: 2
  },
  {
    question: "What is the consumption-based model?",
    options: [
      "Pay a fixed monthly fee",
      "Pay only for what you use",
      "Pay upfront for all services",
      "Pay for idle resources"
    ],
    correctIndex: 1
  },
  {
    question: "Which pricing model offers the highest discount but may be interrupted?",
    options: ["Reserved instances", "Spot instances", "Pay as you go", "Subscription model"],
    correctIndex: 1
  },
  {
    question: "Which pricing model provides a discount for long-term commitment?",
    options: ["Spot instances", "Reserved instances", "Pay as you go", "Consumption-based"],
    correctIndex: 1
  },
  {
    question: "What is serverless computing?",
    options: [
      "Computing without any servers",
      "Infrastructure is managed by the provider",
      "Manual scaled applications",
      "Only available in private cloud"
    ],
    correctIndex: 1
  },
  {
    question: "Which benefit of cloud computing reduces capital expenses?",
    options: ["Speed", "Cost", "Reliability", "Security"],
    correctIndex: 1
  },
  {
    question: "Which cloud benefit allows provisioning resources in minutes?",
    options: ["Purview", "Compliance", "Virtual Machine Manager", "Speed"],
    correctIndex: 3
  },
  {
    question: "What does global scale mean in cloud computing?",
    options: [
      "Services are limited to one region",
      "Large companies can utilize scale at a discount",
      "Resources are delivered at the right time",
      "Offers manual vertical scaling"
    ],
    correctIndex: 2
  },
  {
    question: "Which benefit reduces time spent on hardware setup?",
    options: ["Performance", "Governance", "Security", "Productivity"],
    correctIndex: 3
  },
  {
    question: "What supports reduced latency and better performance?",
    options: ["On-prem datacenters", "Manual scaling", "Cloud infrastructure", "VPN access"],
    correctIndex: 2
  },
  {
    question: "Which cloud feature helps with disaster recovery?",
    options: ["Manual backups", "Geo-distribution and replication", "Local storage", "VPN tunneling"],
    correctIndex: 1
  },
  {
    question: "What does vertical scaling involve?",
    options: [
      "Adding RAM or CPU to an existing VM",
      "Adding new VMs",
      "Increasing storage across multiple regions",
      "Creating a hybrid cloud"
    ],
    correctIndex: 0
  },
  {
    question: "What does horizontal scaling involve?",
    options: [
      "Adding RAM to a VM",
      "Adding more instances of resources",
      "Reducing compute capacity",
      "Upgrading CPUs"
    ],
    correctIndex: 1
  },
  {
    question: "What is reliability in cloud computing?",
    options: [
      "Ability to eliminate costly resources",
      "Ability to recover from failures",
      "Ability to encrypt data",
      "Ability to vertically scale"
    ],
    correctIndex: 1
  },
  {
    question: "What supports performance predictability in the cloud?",
    options: [
      "Autoscaling and load balancing",
      "Manual provisioning",
      "Endpoint access",
      "Reserved instances"
    ],
    correctIndex: 0
  },
  {
    question: "What is a benefit of manageability in the cloud?",
    options: [
      "Physical access to servers",
      "Updates and patching",
      "Centralized dashboard and remote access",
      "Separate tools for each resource"
    ],
    correctIndex: 2
  },
  {
    question: "Which cloud service type offers the most client control?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Function as a Service (FaaS)"
    ],
    correctIndex: 0
  },
  {
    question: "Which cloud model is best suited for a “lift and shift” migration?",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    correctIndex: 2
  },
  {
    question: "In PaaS, who is responsible for the operating system?",
    options: ["The client", "The cloud provider", "Both parties equally", "A third-party vendor"],
    correctIndex: 1
  },
  {
    question: "Which service type is ideal for developers building APIs and IoT apps?",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    correctIndex: 1
  },
  {
    question: "Which cloud model is licensed through monthly or annual subscriptions in Microsoft 365?",
    options: ["IaaS", "PaaS", "SaaS", "FaaS"],
    correctIndex: 2
  },
  {
    question: "In SaaS, what is the customer primarily responsible for?",
    options: [
      "Operating system and infrastructure",
      "Application development",
      "Data and access",
      "Network configuration"
    ],
    correctIndex: 2
  },
  {
    question: "Which cloud model is best for end-users needing ready-to-use software?",
    options: ["SaaS", "PaaS", "IaaS", "Hybrid cloud"],
    correctIndex: 0
  },
  {
    question: "What is an Azure region?",
    options: [
      "A single virtual machine",
      "A backup location for disaster recovery",
      "A geographical area containing one or more data centers",
      "A pricing model for Azure services"
    ],
    correctIndex: 2
  },
  {
    question: "What is the purpose of a regional pair in Azure?",
    options: [
      "To reduce latency",
      "To support disaster recovery",
      "To host virtual machines",
      "To manage billing"
    ],
    correctIndex: 1
  },
  {
    question: "What does geo-distribution enable?",
    options: [
      "Centralized resource management",
      "Reduced security requirements",
      "Availability of services in multiple geographic locations",
      "Lower pricing for geo-redundant services"
    ],
    correctIndex: 2
  },
  {
    question: "What are sovereign regions designed for?",
    options: [
      "Commercial retail businesses",
      "Government entities",
      "Educational institutions",
      "Startup corporations"
    ],
    correctIndex: 1
  },
  {
    question: "What do availability zones provide within a region?",
    options: [
      "High availability and fault tolerance",
      "Lower cost storage",
      "Faster billing cycles",
      "Shared infrastructure"
    ],
    correctIndex: 0
  },
  {
    question: "What is a limitation of availability zones?",
    options: [
      "They cannot host virtual machines",
      "May not protect against large-scale regional disasters",
      "They don’t support redundancy",
      "They are only available in sovereign regions"
    ],
    correctIndex: 1
  },
  {
    question: "What does zone-redundant storage (ZRS) offer?",
    options: [
      "Manual backup configuration",
      "Single-zone replication",
      "Reduced network latency",
      "Reliability across availability zones"
    ],
    correctIndex: 3
  },
  {
    question: "What is Azure composed of?",
    options: [
      "Multiple datacenters in the US",
      "Government regional servers",
      "A globally distributed datacenter infrastructure",
      "A private cloud for Microsoft employees"
    ],
    correctIndex: 2
  },
  {
    question: "How many Azure regions exist worldwide?",
    options: ["Over 30", "Over 45", "Over 60", "Over 100"],
    correctIndex: 2
  },
  {
    question: "Which of the following is NOT part of Azure’s infrastructure?",
    options: ["Power and cooling", "Networking", "Data center buildings", "CRM software"],
    correctIndex: 3
  },
  {
    question: "What is the purpose of Azure’s global infrastructure?",
    options: [
      "To reduce costs for clients",
      "To bring applications closer to users",
      "To host only US-based services",
      "To replace on-premises hardware"
    ],
    correctIndex: 1
  },
  {
    question: "Which Azure component ensures data residency and compliance?",
    options: ["Virtual machines", "Infrastructure", "Resource groups", "Subscriptions"],
    correctIndex: 1
  },
  {
    question: "What is an example of an Azure resource?",
    options: ["A billing account", "A physical server", "A storage account", "A user profile"],
    correctIndex: 2
  },
  {
    question: "How can Azure resources be added?",
    options: ["Only manually", "Automatically or manually", "Only through PowerShell", "Only by Microsoft support"],
    correctIndex: 1
  },
  {
    question: "What is the purpose of a resource group?",
    options: ["To manage billing", "To manage user access", "To store backups", "To organize resources"],
    correctIndex: 3
  },
  {
    question: "Can a resource exist in multiple resource groups?",
    options: ["No", "Yes, if it’s replicated", "Only in hybrid environments", "Only with admin approval"],
    correctIndex: 0
  },
  {
    question: "What is created first when deploying resources in Azure?",
    options: ["Virtual machine", "Resource group", "Subscription", "Storage account"],
    correctIndex: 2
  },
  {
    question: "What is an Azure subscription used for?",
    options: [
      "Managing user identities",
      "Managing compliance policies",
      "Hosting websites",
      "Creating and organizing resource groups and resources"
    ],
    correctIndex: 3
  },
  {
    question: "What happens when a subscription spending limit is reached?",
    options: [
      "Resources are deleted",
      "The subscription is suspended",
      "A warning is issued but services continue",
      "The limit is automatically increased"
    ],
    correctIndex: 1
  },
  {
    question: "What do Network Security Groups (NSGs) control?",
    options: ["Resource to resource traffic in Azure", "Inbound and outbound traffic to Azure resources", "VM Scaling", "Subscription Limits"],
    correctIndex: 1
  },
  {
    question: "Which service distributes traffic across multiple VMs?",
    options: ["Private Endpoint", "Azure Virtual WAN", "Azure Firewall", "Azure Load Balancer"],
    correctIndex: 3
  },
  {
    question: "What does Azure Application Gateway combine?",
    options: ["DNS and VPN", "Web traffic load balancing and WAF", "CVM provisioning and scaling", "ExpressRoute and NSGs"],
    correctIndex: 1
  },
  {
    question: "What is Azure Front Door used for?",
    options: ["Firewall filtering", "Monitoring costs", "Managing subscriptions", "Securing internet-facing applications"],
    correctIndex: 3
  },
  {
    question: "Which tool helps monitor and diagnose network resources?",
    options: ["Azure Firewall", "Azure Network Watcher", "Azure Load Balancer", "Azure Advisor"],
    correctIndex: 1
  },
  {
    question: "What does Azure Virtual Network Manager do?",
    options: ["Centralizes network management", "Hosts Apps", "Resolves domain names", "Filters traffic"],
    correctIndex: 0
  },
  {
    question: "Which compute type offers full OS control?",
    options: ["Azure Functions", "Virtual Machines", "Containers", "Web Apps"],
    correctIndex: 1
  },
  {
    question: "What do containers abstract?",
    options: ["Network topology", "Virtual operating systems", "The operating system", "DNS records"],
    correctIndex: 2
  },
  {
    question: "Which Azure services run containers?",
    options: ["Azure Functions and App Service", "Azure Container Instances and Azure Kubernetes Service", "Azure Front Door and ExpressRoute", "Azure Load Balancer and NSGs"],
    correctIndex: 1
  },
  {
    question: "What is unique about virtual containers?",
    options: ["They include the kernel and run on a VM host", "They run without a host", "They require Azure Functions", "They only run in App Service"],
    correctIndex: 0
  },
  {
    question: "What is the benefit of Azure Functions?",
    options: ["Full OS control", "Serverless execution with consumption-based pricing", "Manual scaling", "Dedicated infrastructure"],
    correctIndex: 1
  },
  {
    question: "What does Azure Virtual Machine Scale Set (VMSS) do?",
    options: ["Replicates VMs in regions", "Encrypts Traffic", "Hosts web apps", "Deploys auto-scaling groups of VMs"],
    correctIndex: 3
  },
  {
    question: "What is vertical scaling?",
    options: ["Adding more VMs in a scale set", "Increasing RAM, CPU, or storage of an existing resource", "Deleting resources", "Changing subscription tiers"],
    correctIndex: 1
  },
  {
    question: "What do Azure compute services provide?",
    options: ["Increased CPU and security", "Network security", "On-demand computational power", "Data backup"],
    correctIndex: 2
  },
  {
    question: "What is the role of Azure networking services?",
    options: ["Managing subscriptions", "Secure communication between Azure resources", "Hosting applications on a VNet", "Control access to public endpoints"],
    correctIndex: 1
  },
  {
    question: "Which service creates a private, isolated network in Azure?",
    options: ["Express Route", "Private Endpoints", "Azure Virtual Network", "Azure Load Balancer"],
    correctIndex: 2
  },
  {
    question: "What does Azure DNS do?",
    options: ["Resolves domain names into IP addresses", "Resolves MAC addresses to IP addresses", "Hosts virtual machines on Private Endpoints", "Filters network traffic from public network"],
    correctIndex: 0
  },
  {
    question: "Which service enables private connectivity to Azure services without using the public internet?",
    options: ["Azure Load Balancer", "Azure Front Door", "Azure DNS", "Azure Private Link"],
    correctIndex: 3
  },
  {
    question: "What does VPN Gateway provide?",
    options: ["Load balancing", "Secure, encrypted connections between on-premises and Azure", "Domain name resolution", "Application hosting"],
    correctIndex: 1
  },
  {
    question: "Which service offers dedicated, private network connections with high bandwidth?",
    options: ["Express Route", "VPN Gateway", "Point to site VPN", "Site to site VPN"],
    correctIndex: 0
  },
  {
    question: "What does Azure Virtual WAN simplify?",
    options: ["Application deployment", "Complex branch networks", "DNS configuration", "VM provisioning"],
    correctIndex: 1
  },
  {
    question: "Which service acts as a cloud-native firewall?",
    options: ["Network Security Group", "Azure Load Balancer", "Azure Firewall", "Azure Filter"],
    correctIndex: 2
  },
  {
    question: "Which service distributes traffic across multiple VMs?",
    options: ["Azure F5", "Azure Load Balancer", "Azure Express Loader", "Azure Virtual WAN"],
    correctIndex: 1
  },
  {
    question: "Which Azure services run containers?",
    options: ["Azure Functions and App Service", "Azure Container Instances and Azure Kubernetes Service", "Azure DNS and ExpressRoute", "Azure Load Balancer and NSGs"],
    correctIndex: 1
  },
  {
    question: "What is Microsoft Entra ID primarily used for?",
    options: ["Managing user identities", "Hosting Network Security Groups", "Monitoring network traffic", "Encrypting storage accounts"],
    correctIndex: 0
  },
  {
    question: "Which service provides legacy authentication protocols like Kerberos and NTLM in Azure?",
    options: ["Microsoft Entra Domain Services", "Microsoft Entra ID", "Azure Blob storage", "Azure Active Directory"],
    correctIndex: 0
  },
  {
    question: "What is the purpose of Microsoft Entra Connect?",
    options: ["To link Azure AD to on-prem AD", "To integrate on-premises Active Directory with Microsoft Entra ID", "To Synchronize users in Entra Domain Services and on-prem AD", "To deploy virtual machines"],
    correctIndex: 1
  },
  {
    question: "What does Single Sign-On (SSO) allow users to do?",
    options: ["Use multiple passwords for different apps", "Bypass Authentication", "Access multiple apps with one login", "Share credentials with others"],
    correctIndex: 2
  },
  {
    question: "Which of the following is an example of Multi-Factor Authentication (MFA)?",
    options: ["Logging in with a username only", "Logging in from a public computer", "Using a shared account", "Approving a mobile app notification"],
    correctIndex: 3
  },
  {
    question: "Which method is considered passwordless authentication?",
    options: ["Username and password", "Fingerprint or facial recognition", "Security questions", "Email verification"],
    correctIndex: 1
  },
  {
    question: "What is Azure AD B2B used for?",
    options: ["Allowing external partners to access internal resources", "Managing internal employee access", "Hosting customer-facing apps", "Monitoring billing for vendors"],
    correctIndex: 0
  },
  {
    question: "What is the purpose of Conditional Access in Microsoft Entra?",
    options: ["Encrypting storage accounts", "Enforcing access policies", "Monitoring firewall readiness", "Blocking on-prem access"],
    correctIndex: 1
  },
  {
    question: "What does Azure RBAC help enforce?",
    options: ["Access to Azure resources", "Network routing", "Compliance", "Application scaling"],
    correctIndex: 0
  },
  {
    question: "Which principle is central to the Zero Trust model?",
    options: ["Trust all internal users", "Verify implicitly", "Allow anonymous access", "Verify explicitly"],
    correctIndex: 3
  },
  {
    question: "What is the primary purpose of the defense-in-depth model?",
    options: ["To reduce cloud storage costs", "To simplify user authentication", "To slow down attacks using multiple layers of security", "To improve network speed"],
    correctIndex: 2
  },
  {
    question: "What does Microsoft Defender for Cloud Apps primarily protect?",
    options: ["Virtual machines", "SaaS application data", "Network traffic", "On-premises servers"],
    correctIndex: 1
  },
  {
    question: "Which feature of Microsoft Defender for Cloud helps discover Shadow IT and assess compliance?",
    options: ["Azure Firewall", "Azure Monitor", "Cloud Access Security Broker", "Azure Load Balancer"],
    correctIndex: 2
  },
  {
    question: "Which factor can affect the cost of an Azure resource?",
    options: ["Number of users in Azure AD", "Resource location and usage meters", "Type of authentication method", "Number of subscriptions"],
    correctIndex: 1
  },
  {
    question: "What does the Total Cost of Ownership (TCO) Calculator compare?",
    options: ["Azure pricing across different services", "On-premises infrastructure costs vs. Azure cloud costs", "VM performance across regions", "Network latency between data centers"],
    correctIndex: 1
  },
  {
    question: "Which tool helps estimate Azure service costs before deployment?",
    options: ["Azure Pricing Calculator", "Azure Advisor", "Azure Monitor", "Azure Reservations"],
    correctIndex: 0
  },
  {
    question: "What does Azure Cost Management allow users to do?",
    options: ["Price storage accounts", "Configure network costs", "Create resource budgets", "Monitor budgets"],
    correctIndex: 3
  },
  {
    question: "What is the benefit of selecting “resource costs” during resource creation?",
    options: ["Enables auto-billing", "Allow fintech to see estimates", "Provides a detailed breakdown of expenses", "Assigns tags automatically"],
    correctIndex: 2
  },
  {
    question: "What does Azure Advisor recommend?",
    options: ["Authentication methods", "Cost-saving actions based on usage patterns", "DNS configurations", "VM image selections"],
    correctIndex: 1
  },
  {
    question: "How much can Azure Reservations save compared to pay-as-you-go pricing?",
    options: ["Up to 25%", "Up to 50%", "Up to 14%", "Up to 72%"],
    correctIndex: 3
  },
  {
    question: "What is a Capital Expenditure (CapEx)?",
    options: ["A monthly subscription fee", "A cloud purchasing agreement", "A consumption-based billing model", "A one-time purchase of equipment or services"],
    correctIndex: 3
  },
  {
    question: "What is an Operational Expense (OpEx)?",
    options: ["A hardware that is purchased annually", "A long-term investment", "A consumption-based, cancel-anytime model", "A tax deduction"],
    correctIndex: 2
  },
  {
    question: "What does cost allocation and tagging help achieve in Azure?",
    options: ["Improved pricing", "Attribute costs to departments or projects", "Improve auto-billing", "Attribute costs to employees"],
    correctIndex: 1
  },
  {
    question: "What does Azure Policy help enforce?",
    options: ["Network routing rules", "Organizational standards and compliance rules", "VM performance metrics", "Policy configurations"],
    correctIndex: 1
  },
  {
    question: "Which action can Azure Policy perform on non-compliant resources?",
    options: ["Automatically remediate them", "Delete them", "Encrypt them", "Archive them"],
    correctIndex: 0
  },
  {
    question: "What does Azure Cost Management + Billing allow users to do?",
    options: ["Configure cloud spending", "Monitor and optimize cloud spending", "Transfer expenses to clients", "Manage user identities"],
    correctIndex: 1
  },
  {
    question: "Which tool provides personalized cost-saving recommendations in Azure?",
    options: ["Azure Monitor", "Azure CLI", "Azure Advisor", "Azure Arc"],
    correctIndex: 2
  },
  {
    question: "What is Microsoft Purview primarily used for?",
    options: ["Hosting government applications", "Unified data governance and compliance", "Managing subscriptions", "Accessing sensitive word lists"],
    correctIndex: 1
  },
  {
    question: "Which feature of Purview helps track how data moves and transforms?",
    options: ["Data encryption", "Cost forecasting", "VM scaling", "Data lineage tracking"],
    correctIndex: 3
  },
  {
    question: "What does Purview use to protect sensitive information?",
    options: ["Email filtering through Exchange Online", "Tagging, encryption, and access control", "Sensitivity logs", "Firewall rules"],
    correctIndex: 1
  },
  {
    question: "What does Azure RBAC manage?",
    options: ["Who can manage Azure resources", "Network traffic", "Resource pricing", "VM performance"],
    correctIndex: 0
  },
  {
    question: "What is the purpose of resource locks in Azure?",
    options: ["To keep resource groups from unauthorized changes", "To lock users in Entra ID", "To monitor performance", "To prevent accidental deletion"],
    correctIndex: 3
  },
  {
    question: "Which tool provides a web-based GUI for managing Azure resources?",
    options: ["Azure CLI", "Azure Portal", "Azure PowerShell", "Azure Arc"],
    correctIndex: 1
  },
  {
    question: "What does Azure Cloud Shell support?",
    options: ["Only PowerShell", "Both PowerShell and Bash via CLI", "Only Bash", "Only GUI commands"],
    correctIndex: 1
  },
  {
    question: "What are ARM Templates used for?",
    options: ["Monitoring performance", "Encrypting data", "Defining IaC for consistent deployments", "Managing user identities"],
    correctIndex: 2
  },
  {
    question: "What does Azure Arc enable?",
    options: ["Unified management of Azure resources", "Unified management of non Azure resources", "Monitor forecasting", "Role assignment"],
    correctIndex: 0
  },
  {
    question: "What is the Azure Portal?",
    options: ["A desktop application for managing Azure", "A unified portal for adding licensing from Microsoft 365", "Web-based interface for managing Azure subscriptions", "A command-line tool for scripting"],
    correctIndex: 2
  },
  {
    question: "Which feature of the Azure Portal helps users avoid billing surprises?",
    options: ["Azure Monitor", "Cost Advisor", "Cost Management", "TCO"],
    correctIndex: 2
  },
  {
    question: "What is Azure Cloud Shell?",
    options: ["A mobile app based version of BASH", "A browser-accessible terminal for managing Azure resources", "A PowerShell module for managing Azure", "A VM provisioning tool"],
    correctIndex: 1
  },
  {
    question: "What does Azure Arc allow you to manage?",
    options: ["Only Azure-native resources", "Only on-prem servers", "Azure and non-Azure resources", "Billing data"],
    correctIndex: 2
  },
  {
    question: "Which feature of Azure Arc supports consistent governance across environments?",
    options: ["Azure Monitor", "Microsoft Purview", "Simplified Governance", "Government compliance services"],
    correctIndex: 2
  },
  {
    question: "What is Infrastructure as Code (IaC)?",
    options: ["Manual configuration of hardware", "Managing infrastructure using premade configuration files", "Infrastructure provisioning using code", "GUI-based resource deployment"],
    correctIndex: 2
  },
  {
    question: "Which IaC approach defines what the infrastructure should look like?",
    options: ["Imperative", "Declarative", "Reactive", "Procedural"],
    correctIndex: 1
  },
  {
    question: "What does idempotency in IaC ensure?",
    options: ["Faster deployments", "Lower costs", "Consistent infrastructure", "Real-time monitoring"],
    correctIndex: 2
  },
  {
    question: "What is Azure Resource Manager (ARM)?",
    options: ["A legacy application", "A logging tool", "A monitoring dashboard", "The platform for deploying Azure resources"],
    correctIndex: 3
  },
  {
    question: "What are ARM templates written in?",
    options: ["Docx", "PowerShell", "XML", "JSON"],
    correctIndex: 3
  },
  {
    question: "What do parameters in ARM templates allow?",
    options: ["Flexibility in deployments", "Changes to the billing code", "Creation of management groups", "Role-based access control"],
    correctIndex: 0
  },
  {
    question: "What type of Azure storage uses SMB and NFS for client access?",
    options: ["Azure Files", "Azure Blob", "Azure Data Lake 2", "Azure Queues"],
    correctIndex: 0
  },
  {
    question: "What type of storage is unstructured data for images and documents?",
    options: ["Azure Files", "Azure Blobs", "Azure Disks", "Azure Queues"],
    correctIndex: 1
  },
  {
    question: "What does Log Analytics use for querying log data?",
    options: ["Kusto Query Language", "SWL", "PowerShell", "JSON"],
    correctIndex: 0
  },
  {
    question: "What can Azure Monitor alerts do when performance thresholds are met?",
    options: ["Encrypt data", "Delete resource", "Trigger notifications", "Modify subscriptions"],
    correctIndex: 2
  },
  {
    question: "What Azure storage is used by virtual machines?",
    options: ["Azure Files", "Azure Queues", "Azure Disks", "Data Lake 2"],
    correctIndex: 2
  },
  {
    question: "What is the most expensive type of storage to restore files?",
    options: ["Hot", "Cold", "Cool", "Queue"],
    correctIndex: 3
  },
  {
    question: "What does Azure Service Health provide?",
    options: ["VM scaling", "Incident reports", "Cost analysis", "Role assignments"],
    correctIndex: 1
  },
  {
    question: "What does Azure Status show?",
    options: ["Billing history", "User roles", "Global Azure health", "Region resource usage"],
    correctIndex: 2
  }
]



