import { Code2, Trophy } from 'lucide-react';

interface HeaderProps {
  completedModules: number;
  totalModules: number;
}

export function Header({ completedModules, totalModules }: HeaderProps) {
  const progress = (completedModules / totalModules) * 100;

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl text-gray-900">JavaStart</h1>
              <p className="text-sm text-gray-500">Aprenda Java do zero</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-600">
              {completedModules} de {totalModules} módulos concluídos
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Seu progresso</span>
            <span className="text-blue-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
