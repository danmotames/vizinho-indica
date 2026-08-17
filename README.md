# Vizinho Indica (React Native + Expo)

Aplicativo mobile (Android/iOS) para compartilhar e consultar recomendações confiáveis de serviços dentro do condomínio.

## Stack

- Expo + React Native
- React Navigation (tabs + stack)
- AsyncStorage para persistência local

## Estrutura

- `src/screens`: telas principais
- `src/components`: componentes reutilizáveis
- `src/navigation`: navegação do app
- `src/services`: camada de dados/serviços
- `src/state`: estado global do app
- `src/theme`: tokens de tema e responsividade

## Pré-requisitos

- Node.js 20+
- npm 10+
- Expo Go no dispositivo (ou Android Studio / Xcode para emuladores)

## Como rodar

```bash
npm install
npm run start
```

Atalhos úteis:

```bash
npm run android      # abre no Android
npm run ios          # abre no iOS (macOS)
npm run run:android  # build nativo Android local
npm run run:ios      # build nativo iOS local (macOS)
```

## Validação local

```bash
npm run lint
npm run build:export
```

## Fluxos principais migrados

1. **Recomendações**: lista, busca e navegação para detalhes.
2. **Indicar**: formulário mobile com validação e UX para teclado/toque.
3. **Perfil**: resumo e restauração dos dados iniciais.

## Observações conhecidas

- Persistência atual é local (`AsyncStorage`) para viabilizar execução offline.
- Integrações de API podem ser acopladas na pasta `src/services` sem alterar as telas.
