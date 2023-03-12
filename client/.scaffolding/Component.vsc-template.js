(function Template() {
  const toPascalCase = (str) =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (fl) => fl.toUpperCase())
      .replace(/\W+/g, '');

  const toCamelCase = (str) =>
    toPascalCase(str).replace(/^./, (firstLetter) => firstLetter.toLowerCase());

  const toKebabCase = (str) =>
    toCamelCase(str).replace(/([A-Z])/g, (word) => '-' + word.toLowerCase());

  return {
    userInputs: [
      {
        title: 'What is the Component Name',
        argumentName: 'name', // will become input in template
        defaultValue: 'SampleComponent',
      },
    ],
    template: [
      {
        type: 'folder',
        name: (inputs) => `${toPascalCase(inputs.name)}`,
        children: [
          {
            type: 'file',
            name: (inputs) => `index.ts`,
            content: (inputs) => `import ${toPascalCase(
              inputs.name
            )} from './${toPascalCase(inputs.name)}';

export type { ${toPascalCase(inputs.name)}Props } from './${toPascalCase(
              inputs.name
            )}';

export default ${toPascalCase(inputs.name)};`,
          },
          {
            type: 'file',
            name: (inputs) => `${toPascalCase(inputs.name)}.tsx`,
            content: (inputs) => `import { memo } from 'react';

import { ${toPascalCase(inputs.name)}View } from './${toPascalCase(
              inputs.name
            )}.view';
import { ${toPascalCase(inputs.name)}ViewModel, ${toPascalCase(
              inputs.name
            )}ViewModelProps } from './${toPascalCase(inputs.name)}.view-model';

export interface ${toPascalCase(inputs.name)}Props {}

// Quando a prop é usada somente aqui, devemos omitir para não ir pra View
export interface ${toPascalCase(inputs.name)}ViewProps
    extends Omit<${toPascalCase(inputs.name)}Props, ''> {
// Quando alguma prop vai ser utilizada somente na View, devemos acrescentar aqui
}

function ${toPascalCase(inputs.name)}(props: ${toPascalCase(
              inputs.name
            )}Props) {
  const { ...viewProps } = props;

  const viewModel = useViewModel();

  return (
      <${toPascalCase(
        inputs.name
      )}View viewModel={viewModel} props={viewProps} />
  );
}

export function useViewModel(){
  const viewModel = ${toPascalCase(inputs.name)}ViewModel()

  return viewModel;
}

export default memo(${toPascalCase(inputs.name)});
`,
          },
          {
            type: 'file',
            name: (inputs) => `${toPascalCase(inputs.name)}.view-model.tsx`,
            content: (inputs) => `import { useState } from 'react';

export interface ${toPascalCase(inputs.name)}ViewModelProps {
  state: string;
}

export function ${toPascalCase(inputs.name)}ViewModel() {
  const [state, setState] = useState('')

  return {
    state,
    setState
  }
}
`,
          },
          {
            type: 'file',
            name: (inputs) => `${toPascalCase(inputs.name)}.view.tsx`,
            content: (inputs) => `
import { ${toPascalCase(inputs.name)}ViewModelProps } from './${toPascalCase(
              inputs.name
            )}.view-model';
import { ${toPascalCase(inputs.name)}ViewProps } from './${toPascalCase(
              inputs.name
            )}';
import * as styled from './${toPascalCase(inputs.name)}.styles';



interface Props {
  viewModel: ${toPascalCase(inputs.name)}ViewModelProps;
  props: ${toPascalCase(inputs.name)}ViewProps;
}

export function ${toPascalCase(inputs.name)}View({ viewModel, props }: Props) {
  const { ...${toCamelCase(inputs.name)}Props } = props;

  return (
    <styled.${toPascalCase(inputs.name)}>
      <h1>${toPascalCase(inputs.name)}</h1>
    </styled.${toPascalCase(inputs.name)}>
  );
}
`,
          },
          {
            type: 'file',
            name: (inputs) => `${toPascalCase(inputs.name)}.styles.ts`,
            content: (inputs) => `import styled from 'styled-components';

export const ${toPascalCase(inputs.name)} = styled.div\`\`;
`,
          },

          {
            type: 'file',
            name: (inputs) => `${toPascalCase(inputs.name)}.spec.tsx`,
            content: (inputs) => `import React from 'react';

import { render } from '@testing-library/react';

import ${toPascalCase(inputs.name)} from './${toPascalCase(inputs.name)}';

describe('${toPascalCase(inputs.name)}', () => {
  it('Should render component When called with default props', () => {
    // Arrange

    // Act
    const rendered = render(
      <CompositionProvider>
        <${toPascalCase(inputs.name)} />
      </CompositionProvider>,
    );

    // Assert
    rendered.getByRole('heading', { name: /${toPascalCase(inputs.name)}/i });
  });
});
`,
          },
        ],
      },
    ],
  };
});
