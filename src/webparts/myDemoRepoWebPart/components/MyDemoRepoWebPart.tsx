import * as React from 'react';
import styles from './MyDemoRepoWebPart.module.scss';
import { IMyDemoRepoWebPartProps } from './IMyDemoRepoWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class MyDemoRepoWebPart extends React.Component<IMyDemoRepoWebPartProps, {}> {
  public render(): React.ReactElement<IMyDemoRepoWebPartProps> {
    return (
      <div className={ styles.myDemoRepoWebPart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
