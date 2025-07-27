import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const contactFormLambda = new NodejsFunction(this, 'ContactFormHandler', {
      entry: path.join(__dirname, '../lambda/contact.ts'),
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'handler',
    });

    contactFormLambda.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });
  }
}
