#!/bin/bash

# SkilliZee Lambda Backend Deployment Script
# This script deploys the Lambda backend using Serverless Framework

set -e  # Exit on any error

echo "🚀 Starting SkilliZee Lambda Backend Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "serverless.yml" ]; then
    print_error "serverless.yml not found. Please run this script from the backend directory."
    exit 1
fi

# Check if AWS CLI is configured
print_status "Checking AWS CLI configuration..."
if ! aws sts get-caller-identity > /dev/null 2>&1; then
    print_error "AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=$(aws configure get region)
print_success "AWS Account: $AWS_ACCOUNT_ID, Region: $AWS_REGION"

# Check if Serverless Framework is installed
print_status "Checking Serverless Framework installation..."
if ! command -v serverless &> /dev/null; then
    print_warning "Serverless Framework not found. Installing..."
    npm install -g serverless
    print_success "Serverless Framework installed"
else
    SERVERLESS_VERSION=$(serverless --version)
    print_success "Serverless Framework version: $SERVERLESS_VERSION"
fi

# Install dependencies
print_status "Installing npm dependencies..."
npm install
print_success "Dependencies installed"

# Check if .env file exists and create SSM parameters
if [ -f ".env" ]; then
    print_status "Found .env file. Creating SSM parameters..."
    
    # Source the .env file
    set -a
    source .env
    set +a
    
    # Create SSM parameters
    print_status "Creating SSM parameters..."
    
    # Razorpay credentials
    if [ ! -z "$RAZORPAY_KEY_ID" ]; then
        aws ssm put-parameter \
            --name "/skillizee/razorpay/key_id" \
            --value "$RAZORPAY_KEY_ID" \
            --type "SecureString" \
            --overwrite
        print_success "Created RAZORPAY_KEY_ID parameter"
    fi
    
    if [ ! -z "$RAZORPAY_KEY_SECRET" ]; then
        aws ssm put-parameter \
            --name "/skillizee/razorpay/key_secret" \
            --value "$RAZORPAY_KEY_SECRET" \
            --type "SecureString" \
            --overwrite
        print_success "Created RAZORPAY_KEY_SECRET parameter"
    fi
    
    # Graphy credentials
    if [ ! -z "$GRAPHY_MERCHANT_ID" ]; then
        aws ssm put-parameter \
            --name "/skillizee/graphy/merchant_id" \
            --value "$GRAPHY_MERCHANT_ID" \
            --type "SecureString" \
            --overwrite
        print_success "Created GRAPHY_MERCHANT_ID parameter"
    fi
    
    if [ ! -z "$GRAPHY_API_TOKEN" ]; then
        aws ssm put-parameter \
            --name "/skillizee/graphy/api_token" \
            --value "$GRAPHY_API_TOKEN" \
            --type "SecureString" \
            --overwrite
        print_success "Created GRAPHY_API_TOKEN parameter"
    fi
    
    # Course ID
    if [ ! -z "$COURSE_ID" ]; then
        aws ssm put-parameter \
            --name "/skillizee/course_id" \
            --value "$COURSE_ID" \
            --type "String" \
            --overwrite
        print_success "Created COURSE_ID parameter"
    fi
    
    # Razorpay webhook secret
    if [ ! -z "$RAZORPAY_WEBHOOK_SECRET" ]; then
        aws ssm put-parameter \
            --name "/skillizee/razorpay/webhook_secret" \
            --value "$RAZORPAY_WEBHOOK_SECRET" \
            --type "SecureString" \
            --overwrite
        print_success "Created RAZORPAY_WEBHOOK_SECRET parameter"
    fi
    
else
    print_warning "No .env file found. Please ensure SSM parameters are created manually."
    print_status "Required SSM parameters:"
    echo "  - /skillizee/razorpay/key_id"
    echo "  - /skillizee/razorpay/key_secret"
    echo "  - /skillizee/graphy/merchant_id"
    echo "  - /skillizee/graphy/api_token"
    echo "  - /skillizee/course_id"
    echo "  - /skillizee/razorpay/webhook_secret"
fi

# Deploy using Serverless Framework
print_status "Deploying Lambda functions..."
serverless deploy --verbose

if [ $? -eq 0 ]; then
    print_success "🎉 Lambda backend deployed successfully!"
    
    # Get the API Gateway URL
    print_status "Getting deployment information..."
    serverless info
    
    print_status "Deployment complete! Your Lambda backend is now live."
    print_status "Update your frontend API configuration with the new endpoints."
    
else
    print_error "❌ Deployment failed!"
    exit 1
fi
