# CPF Validator API

## Overview
CPF (Cadastro de Pessoas Físicas) is a taxpayer identification number assigned to each individual resident in Brazil. This number is unique to each citizen and is used to identify individuals in financial transactions and other interactions with the government and the private sector.

The CPF Validator API is an application developed in Node.js with the Express framework, designed to validate CPF numbers according to the rules established by the Brazilian Federal Revenue Service.

## Endpoints

### Validate CPF
- **URL:** `/users/:cpf`
- **Method:** `GET`
- **Description:** This endpoint allows the validation of a specific CPF number.
- **Parameters:**
  - `cpf`: The CPF number to be validated.
- **Responses:**
  - `200 OK`: Returns whether the CPF is valid or invalid.
  - `400 Bad Request`: Returns that it is invalid or malformed.

## Installation
1. Clone the repository: `git clone https://github.com/your-user/cpf-validator.git`
2. Enter the project folder: `cd cpfvalidator`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Access the API at `http://localhost:8080`

## How to Use
1. Make a GET request to `/users/:cpf`, replacing `:cpf` with the CPF number to be validated.
2. The API response will indicate whether the CPF is valid or invalid.
