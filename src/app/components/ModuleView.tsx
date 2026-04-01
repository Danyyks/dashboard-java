import { ArrowLeft, CheckCircle2, BookOpen, Code, Lightbulb, Terminal } from 'lucide-react';

interface ModuleContent {
  id: string;
  title: string;
  explanation: string;
  codeExamples: Array<{
    title: string;
    code: string;
    explanation: string;
  }>;
  exercises: Array<{
    title: string;
    difficulty: string;
    description: string;
    steps: string[];
    expectedOutput: string;
  }>;
  tips: string[];
}

interface ModuleViewProps {
  module: ModuleContent;
  onBack: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

const difficultyColors: Record<string, string> = {
  Fácil: 'bg-green-100 text-green-700 border-green-200',
  Médio: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Difícil: 'bg-red-100 text-red-700 border-red-200',
};

export function ModuleView({ module, onBack, onComplete, isCompleted }: ModuleViewProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-6 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Dashboard
          </button>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-900">{module.title}</h1>
            {isCompleted && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">Módulo concluído</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12 space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl text-gray-900">Entenda o conceito</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{module.explanation}</p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-xl text-gray-900">Exemplos de código</h2>
          </div>
          <div className="space-y-6">
            {module.codeExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-gray-900">{example.title}</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-900 rounded-xl p-6 mb-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100 font-mono">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{example.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {module.tips.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <h2 className="text-xl text-gray-900">Dicas importantes</h2>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <ul className="space-y-3">
                {module.tips.map((tip, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="text-yellow-600 mt-1">💡</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Terminal className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-xl text-gray-900">Exercícios de codificação</h2>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            Pratique escrevendo código Java em seu editor ou IDE. Cada exercício mostra a saída
            esperada para você validar seu resultado.
          </p>

          <div className="space-y-8">
            {module.exercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="text-gray-900">{exercise.title}</h3>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-medium ${
                      difficultyColors[exercise.difficulty] ?? 'bg-gray-100 text-gray-600 border-gray-200'
                    }`}
                  >
                    {exercise.difficulty}
                  </span>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">O que fazer:</h4>
                    <p className="text-gray-700 leading-relaxed">{exercise.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Passo a passo:</h4>
                    <ol className="space-y-2">
                      {exercise.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex gap-3 text-gray-600 text-sm">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-semibold mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Saída esperada:</h4>
                    <div className="bg-gray-900 rounded-xl px-5 py-4 overflow-x-auto">
                      <pre className="text-sm text-green-400 font-mono whitespace-pre">
                        {exercise.expectedOutput}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isCompleted ? (
            <button
              onClick={onComplete}
              className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all"
            >
              ✅ Concluí todos os exercícios — Marcar módulo como concluído
            </button>
          ) : (
            <div className="mt-8 bg-green-50 rounded-2xl p-6 border border-green-200 text-center">
              <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-green-700 font-medium">Módulo concluído! Continue para o próximo.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
