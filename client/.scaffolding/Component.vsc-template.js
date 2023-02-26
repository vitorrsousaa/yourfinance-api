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
        name: (inputs) => `${toKebabCase(inputs.name)}`,
        children: [
          {
            type: 'file',
            name: (inputs) => `index.ts`,
            content: (inputs) => `import ${toPascalCase(
              inputs.name
            )} from './${toKebabCase(inputs.name)}';

export type { ${toPascalCase(inputs.name)}Props } from './${toKebabCase(
              inputs.name
            )}';
export * from './${toKebabCase(inputs.name)}.routes';

export default ${toPascalCase(inputs.name)};
`,
          },
          {
            type: 'file',
            name: (inputs) => `${toKebabCase(inputs.name)}.tsx`,
            content: (inputs) => `import { memo } from 'react';

import ${toPascalCase(inputs.name)}View from './${toKebabCase(
              inputs.name
            )}.view';
import ${toPascalCase(inputs.name)}ViewModel from './${toKebabCase(
              inputs.name
            )}.view-model';

export interface ${toPascalCase(inputs.name)}Props {
  children?: ReactNode;

  className?: string;

  style?: React.CSSProperties;

}

type ${toPascalCase(inputs.name)}Types = ViewModelTypeTemplate<${toPascalCase(
              inputs.name
            )}Props, never, never>;
export type ${toPascalCase(inputs.name)}ViewProps = ${toPascalCase(
              inputs.name
            )}Types['ViewProps'];
export type ${toPascalCase(inputs.name)}ObservableProps = ${toPascalCase(
              inputs.name
            )}Types['ObservableProps'];

function ${toPascalCase(inputs.name)}(props: ${toPascalCase(
              inputs.name
            )}Props) {
  // Split observable props to be used in the view model and leave the rest for the view.
  const { ...viewProps } = props;
  const observableProps: ${toPascalCase(inputs.name)}ObservableProps = {};
  const viewModel = useViewModel<${toPascalCase(
    inputs.name
  )}ViewModel, ${toPascalCase(inputs.name)}ObservableProps>(
    () => new ${toPascalCase(inputs.name)}ViewModel(observableProps),
    observableProps,
  );



  return (

      <${toPascalCase(
        inputs.name
      )}View viewModel={viewModel} props={viewProps} />

  );
}

export default memo(${toPascalCase(
              inputs.name
            )}) as unknown as typeof ${toPascalCase(inputs.name)};
`,
          },
          {
            type: 'file',
            name: (inputs) => `${toKebabCase(inputs.name)}.view-model.ts`,
            content: (inputs) => `
import { ${toPascalCase(inputs.name)}ObservableProps } from './${toKebabCase(
              inputs.name
            )}';


export class ${toPascalCase(inputs.name)}ViewModel {
  // include state variables here...

  constructor(public props: ${toPascalCase(inputs.name)}ObservableProps) {
    makeObservable(this, {
      props: observable,
    });
  }
}

export default ${toPascalCase(inputs.name)}ViewModel;
`,
          },
          {
            type: 'file',
            name: (inputs) => `${toKebabCase(inputs.name)}.view.tsx`,
            content: (inputs) => `;
import { ${toPascalCase(inputs.name)}ViewProps } from './${toKebabCase(
              inputs.name
            )}';
import * as styled from './${toKebabCase(inputs.name)}.styles';
import ${toPascalCase(inputs.name)}ViewModel from './${toKebabCase(
              inputs.name
            )}.view-model';

interface Props {
  viewModel: ${toPascalCase(inputs.name)}ViewModel;
  props: ${toPascalCase(inputs.name)}ViewProps;
}

function ${toPascalCase(inputs.name)}View({ viewModel, props }: Props) {
  const { children, ...${toCamelCase(inputs.name)}Props } = props;

  return (
    <styled.${toPascalCase(inputs.name)} className={\`${toKebabCase(
              inputs.name
            )} \${props.className ?? ''}\`.trim()} style={props.style}>
      <h1>${toPascalCase(inputs.name)}</h1>
      {children}
    </styled.${toPascalCase(inputs.name)}>
  );
}

export default ${toPascalCase(inputs.name)}View;
`,
          },
          {
            type: 'file',
            name: (inputs) => `${toKebabCase(inputs.name)}.routes.tsx`,
            content: (inputs) => `
/*
To import child routes, insert the following code:
import { routes as <child-folder>Routes } from './components/<folder>';
*/

const ${toPascalCase(inputs.name)} = React.lazy(() => import('.'));
export const routes = [
  new Route({
    path: '${toKebabCase(inputs.name)}',
    element: ${toPascalCase(inputs.name)},
    children: [],
  })
];
`,
          },
          {
            type: 'file',
            name: (inputs) => `${toKebabCase(inputs.name)}.styles.ts`,
            content: (inputs) => `import styled from 'styled-components';

// import { ${toPascalCase(inputs.name)}Theme } from './themes/types';

/* Uncomment the above import of ${toPascalCase(
              inputs.name
            )}Theme and access theme variables using:
  \${({ theme }: { theme: ${toPascalCase(inputs.name)}Theme }) => theme. ... };
*/

export const ${toPascalCase(inputs.name)} = styled.div\`\`;
`,
          },

          {
            type: 'file',
            name: (inputs) => `${toKebabCase(inputs.name)}.spec.tsx`,
            content: (inputs) => `import React from 'react';

import { render } from '@testing-library/react';

import ${toPascalCase(inputs.name)} from './${toKebabCase(inputs.name)}';

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
