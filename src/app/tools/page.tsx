"use client";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";

type Tool = {
  name: string;
  description: string;
  phase: string;
};
const toolsData = {
  phases: [
    "All Tools",
    "Reconnaissance",
    "Scanning",
    "Enumeration",
    "Vulnerability",
    "Intelligence",
    "Osint",
  ],
  tools: [
    {
      name: "bbot",
      description: "The recursive internet scanner for hackers. 🧡",
      phase: "Osint",
    },
    {
      name: "enum4linux-ng",
      description: "A next generation version of enum4linux",
      phase: "Reconnaissance",
    },
    {
      name: "smbmap",
      description: "A handy SMB enumeration tool",
      phase: "Reconnaissance",
    },
    {
      name: "subbrute",
      description: "A DNS meta-query spider",
      phase: "Reconnaissance",
    },
    {
      name: "pydictor",
      description: "A powerful and smart dictionary generator",
      phase: "Reconnaissance",
    },
    {
      name: "sqlmap",
      description: "Automatic SQL injection and database takeover tool",
      phase: "Vulnerability",
    },
    {
      name: "theHarvester",
      description: "E-mails, subdomains and names Harvester",
      phase: "Reconnaissance",
    },
    {
      name: "wesng",
      description: "Windows Exploit Suggester Next Generation",
      phase: "Vulnerability",
    },
    {
      name: "LinEnum",
      description: "Local Linux Enumeration & Privilege Escalation Checks",
      phase: "Vulnerability",
    },
    {
      name: "virtual-reality",
      description: "A tool to create a virtual reality for red teaming",
      phase: "Vulnerability",
    },
    {
      name: "pwncat",
      description: "Netcat on steroids with a twist",
      phase: "Vulnerability",
    },
    {
      name: "PowerSploit",
      description: "A PowerShell Post-Exploitation Framework",
      phase: "Vulnerability",
    },
    {
      name: "ADRecon",
      description: "Active Directory Reconnaissance Tool",
      phase: "Reconnaissance",
    },
    {
      name: "SauronEye",
      description: "A tool to gather information about a target",
      phase: "Reconnaissance",
    },
    {
      name: "CMSeeK",
      description: "A multi-threaded CMS detection and exploitation tool",
      phase: "Vulnerability",
    },
    {
      name: "ssf",
      description: "Secure Socket Funneling",
      phase: "Vulnerability",
    },
    {
      name: "RedELK",
      description: "Red Team's SIEM",
      phase: "Vulnerability",
    },
    {
      name: "nikto",
      description: "A web server scanner",
      phase: "Vulnerability",
    },
    {
      name: "pwnedOrNot",
      description: "A tool to check if a password has been pwned",
      phase: "Intelligence",
    },
    {
      name: "pwndb",
      description: "A tool to search for leaked credentials",
      phase: "Intelligence",
    },
    {
      name: "knockknock",
      description: "A tool to perform reverse DNS lookups",
      phase: "Reconnaissance",
    },
    {
      name: "pupy",
      description: "A remote access tool",
      phase: "Vulnerability",
    },
    {
      name: "wpscan",
      description: "A WordPress vulnerability scanner",
      phase: "Vulnerability",
    },
    {
      name: "unix-privesc-check",
      description: "A tool to check for privilege escalation vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "ADAPE-Script",
      description: "A tool to automate Active Directory enumeration",
      phase: "Reconnaissance",
    },
    {
      name: "postenum",
      description:
        "A tool to enumerate and exploit post-enumeration vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "Responder",
      description: "A tool to respond to LLMNR and NBT-NS requests",
      phase: "Vulnerability",
    },
    {
      name: "Rubeus",
      description: "A tool to interact with Kerberos",
      phase: "Vulnerability",
    },
    {
      name: "LaZagne",
      description: "A tool to retrieve passwords from various applications",
      phase: "Vulnerability",
    },
    {
      name: "Empire",
      description: "A PowerShell and Python post-exploitation framework",
      phase: "Vulnerability",
    },
    {
      name: "WinPwn",
      description: "A tool to automate Windows exploitation",
      phase: "Vulnerability",
    },
    {
      name: "SimplyEmail",
      description: "A tool to enumerate and exploit email services",
      phase: "Vulnerability",
    },
    {
      name: "Salsa-tools",
      description: "A collection of tools for persistence",
      phase: "Vulnerability",
    },
    {
      name: "LOLBITS",
      description: "A tool to create a persistence framework",
      phase: "Vulnerability",
    },
    {
      name: "reGeorg",
      description: "A tunneling tool for HTTP and SOCKS",
      phase: "Vulnerability",
    },
    {
      name: "PrivescCheck",
      description: "A tool to check for privilege escalation vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "linux-exploit-suggester",
      description: "A tool to suggest potential exploits for Linux systems",
      phase: "Vulnerability",
    },
    {
      name: "GTFOBLookup",
      description: "A tool to search for GTFOBins",
      phase: "Vulnerability",
    },
    {
      name: "changeme",
      description: "A tool to find default credentials",
      phase: "Vulnerability",
    },
    {
      name: "default-http-login-hunter",
      description: "A tool to find default HTTP login credentials",
      phase: "Vulnerability",
    },
    {
      name: "EyeWitness",
      description: "A tool to take screenshots of web applications",
      phase: "Vulnerability",
    },
    {
      name: "TheFatRat",
      description: "A tool to create a persistence framework",
      phase: "Vulnerability",
    },
    {
      name: "CarbonCopy",
      description: "A tool to create a persistence framework",
      phase: "Vulnerability",
    },
    {
      name: "CheckPlease",
      description: "A tool to check for sandbox evasion techniques",
      phase: "Vulnerability",
    },
    {
      name: "spoofing-office-macro",
      description: "A tool to create spoofed Office macros",
      phase: "Vulnerability",
    },
    {
      name: "MaliciousMacroMSBuild",
      description: "A tool to create malicious macros",
      phase: "Vulnerability",
    },
    {
      name: "EvilClippy",
      description: "A tool to create malicious Office documents",
      phase: "Vulnerability",
    },
    {
      name: "Mapping-Injection",
      description: "A tool to create malicious mappings",
      phase: "Vulnerability",
    },
    {
      name: "SharpBlock",
      description: "A tool to create malicious DLLs",
      phase: "Vulnerability",
    },
    {
      name: "Ghost-In-The-Logs",
      description: "A tool to evade log detection",
      phase: "Vulnerability",
    },
    {
      name: "exe_to_dll",
      description: "A tool to convert EXEs to DLLs",
      phase: "Vulnerability",
    },
    {
      name: "kwetza",
      description: "A tool to interact with Android devices",
      phase: "Vulnerability",
    },
    {
      name: "domain_analyzer",
      description: "A tool to analyze domains",
      phase: "Reconnaissance",
    },
    {
      name: "PowerMeta",
      description: "A tool to extract metadata from documents",
      phase: "Reconnaissance",
    },
    {
      name: "metagoofil",
      description: "A tool to extract metadata from documents",
      phase: "Reconnaissance",
    },
    {
      name: "NTLMRecon",
      description: "A tool to enumerate NTLM authentication",
      phase: "Vulnerability",
    },
    {
      name: "snmpwn",
      description: "A tool to exploit SNMP vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "xrdp",
      description: "A tool to interact with RDP and X11",
      phase: "Vulnerability",
    },
    {
      name: "PRETty",
      description: "A tool to exploit printer vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "msdat",
      description: "A tool to exploit MS SQL vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "SPartan",
      description: "A tool to exploit SharePoint vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "Finger-User-Enumeration",
      description: "A tool to enumerate users via finger protocol",
      phase: "Reconnaissance",
    },
    {
      name: "mentalist",
      description: "A tool to generate wordlists",
      phase: "Reconnaissance",
    },
    {
      name: "CeWL",
      description: "A tool to generate wordlists",
      phase: "Reconnaissance",
    },
    {
      name: "Password-Scripts",
      description: "A collection of password cracking scripts",
      phase: "Vulnerability",
    },
    {
      name: "One-Lin3r",
      description: "A tool to create one-liners",
      phase: "Vulnerability",
    },
    {
      name: "wfuzz",
      description: "A tool to perform web application fuzzing",
      phase: "Vulnerability",
    },
    {
      name: "dirsearch",
      description: "A tool to discover directories",
      phase: "Vulnerability",
    },
    {
      name: "SSRFmap",
      description: "A tool to exploit SSRF vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "BaRMIe",
      description: "A tool to exploit Java RMI vulnerabilities",
      phase: "Vulnerability",
    },
    {
      name: "rmiscout",
      description: "A tool to exploit Java RMI vulnerabilities",
      phase: "Vulnerability",
    },
  ],
};

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Tools");
  const tools: Tool[] = toolsData.tools;
  const categories = toolsData.phases;
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Tools" || tool.phase === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05070a] via-[#0c0e14] to-[#121620] text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400"
        >
          Arsenal Toolkit
        </motion.h1>

        {/* Search and Category Filtering */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-[#1e1e2e] border border-cyan-900/30 text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category: any) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 
                  ${
                    selectedCategory === category
                      ? "bg-cyan-500 text-white"
                      : "bg-[#1e1e2e] text-gray-300 hover:bg-[#2a2a3a]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool: any, index: any) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1e1e2e] border border-cyan-900/30 rounded-xl p-6 
                transform transition-all duration-300 
                hover:scale-105 hover:border-cyan-500/50 
                hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center text-2xl font-bold 
                    ${
                      index % 2 === 0
                        ? "bg-gradient-to-br from-cyan-500 to-blue-500"
                        : "bg-gradient-to-br from-emerald-500 to-green-500"
                    }`}
                  >
                    {tool.name[0]}
                  </div>
                  <h2 className="text-2xl font-semibold">{tool.name}</h2>
                </div>
                <p className="text-gray-400 mb-2">{tool.description}</p>
                <span className="text-sm text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded">
                  {tool.phase}
                </span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-16">
            No tools found matching your search or category.
          </div>
        )}
      </div>
    </div>
  );
}
