#!/bin/bash

echo "🔍 Verificando lint e tipos..."

# Executa o lint
echo "📝 Verificando ESLint..."
npm run lint
LINT_EXIT_CODE=$?

# Executa a verificação de tipos
echo "🎯 Verificando TypeScript..."
npm run type-check
TYPE_EXIT_CODE=$?

# Verifica se houve erros
if [ $LINT_EXIT_CODE -ne 0 ] || [ $TYPE_EXIT_CODE -ne 0 ]; then
    echo "❌ Erros encontrados! Corrija os problemas antes de fazer commit."
    exit 1
else
    echo "✅ Tudo certo! Você pode fazer commit."
    exit 0
fi
