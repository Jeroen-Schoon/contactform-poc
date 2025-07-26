import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const contactFormLambda = new lambda.Function(this, 'ContactFormHandler', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'contact.handler',
      code: lambda.Code.fromAsset('../lambda'),
    });
  }
}
