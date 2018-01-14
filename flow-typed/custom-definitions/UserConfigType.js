declare type UserTemplateConfigType = {
  [name: string]: {
    sourcePath: string
  }
};

declare type UserDestinationsConfigType = {
  [name: string]: string
};

declare type UserVariablesConfigType = {
  [name: string]: string
};

declare type UserConfigType = {|
  rootDir: string,
  templates: UserTemplateConfigType,
  destinations: UserDestinationsConfigType,
  variables: UserVariablesConfigType
|};
