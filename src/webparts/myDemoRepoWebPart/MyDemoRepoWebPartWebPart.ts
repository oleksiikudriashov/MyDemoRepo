import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MyDemoRepoWebPartWebPartStrings';
import MyDemoRepoWebPart from './components/MyDemoRepoWebPart';
import { IMyDemoRepoWebPartProps } from './components/IMyDemoRepoWebPartProps';

export interface IMyDemoRepoWebPartWebPartProps {
  description: string;
}

export default class MyDemoRepoWebPartWebPart extends BaseClientSideWebPart<IMyDemoRepoWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMyDemoRepoWebPartProps> = React.createElement(
      MyDemoRepoWebPart,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
