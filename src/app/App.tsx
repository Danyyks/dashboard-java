import { useState, useEffect } from "react";
import {
  BookOpen,
  Variable,
  GitBranch,
  RotateCw,
  Code,
  Box,
  Grid3x3,
} from "lucide-react";
import { Header } from "./components/Header";
import { ModuleCard } from "./components/ModuleCard";
import { ModuleView } from "./components/ModuleView";
import { modules } from "./data/modules";

const moduleIcons = {
  "intro-java": BookOpen,
  variaveis: Variable,
  condicionais: GitBranch,
  loops: RotateCw,
  funcoes: Code,
  "orientacao-objetos": Box,
  arrays: Grid3x3,
};

const moduleColors = {
  "intro-java": "bg-gradient-to-br from-blue-500 to-blue-600",
  variaveis: "bg-gradient-to-br from-purple-500 to-purple-600",
  condicionais: "bg-gradient-to-br from-pink-500 to-pink-600",
  loops: "bg-gradient-to-br from-orange-500 to-orange-600",
  funcoes: "bg-gradient-to-br from-teal-500 to-teal-600",
  "orientacao-objetos": "bg-gradient-to-br from-indigo-500 to-indigo-600",
  arrays: "bg-gradient-to-br from-cyan-500 to-cyan-600",
};

export default function App() {
  const [completedModules, setCompletedModules] = useState<Set<string>>(
    new Set(),
  );
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("javastart-completed");
    if (stored) {
      setCompletedModules(new Set(JSON.parse(stored)));
    }
  }, []);

  const handleModuleComplete = (moduleId: string) => {
    const newCompleted = new Set(completedModules);
    newCompleted.add(moduleId);
    setCompletedModules(newCompleted);
    localStorage.setItem(
      "javastart-completed",
      JSON.stringify(Array.from(newCompleted)),
    );
  };

  const selectedModule = modules.find((m) => m.id === selectedModuleId);

  if (selectedModule) {
    return (
      <ModuleView
        module={selectedModule}
        onBack={() => setSelectedModuleId(null)}
        onComplete={() => handleModuleComplete(selectedModule.id)}
        isCompleted={completedModules.has(selectedModule.id)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        completedModules={completedModules.size}
        totalModules={modules.length}
      />

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-12">
          <h2 className="text-3xl text-gray-900 mb-3">
            Bem-vindo ao JavaStart! 👋
          </h2>
          <h3>Por Dany Jonathan 🧑🏻‍💻</h3>
          <p className="text-lg text-gray-600 max-w-3xl">
            Aprenda os fundamentos de Java de forma simples e interativa. Cada
            módulo contém explicações claras, exemplos práticos e exercícios
            para fixar o aprendizado. Comece pelo primeiro módulo e avance no
            seu ritmo!
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-gray-900 mb-2">Módulos de aprendizado</h3>
          <p className="text-sm text-gray-500">
            Clique em um card para começar a estudar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              title={module.title}
              description={module.description}
              icon={moduleIcons[module.id as keyof typeof moduleIcons]}
              color={moduleColors[module.id as keyof typeof moduleColors]}
              completed={completedModules.has(module.id)}
              onClick={() => setSelectedModuleId(module.id)}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-xl text-gray-900 mb-4">
            💡 Dicas para aproveitar melhor
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>
                Estude um módulo por vez e complete todos os exercícios
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>
                Tente escrever os códigos você mesmo para fixar melhor
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>
                Não tenha pressa! É melhor entender bem do que passar rápido
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>
                Se errar um exercício, revise o conteúdo antes de tentar
                novamente
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
