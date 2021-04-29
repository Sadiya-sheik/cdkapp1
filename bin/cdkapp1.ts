#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Cdkapp1Stack } from '../lib/cdkapp1-stack';

const app = new cdk.App();
new Cdkapp1Stack(app, 'Cdkapp1Stack');
