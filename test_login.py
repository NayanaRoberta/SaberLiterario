# test_login.py

import pytest
from faker import Faker
from app_autenticacao import login  # Importe a função

@pytest.fixture
def fake_data():
   
    return Faker('pt_BR')

def test_login_credenciais_corretas(mocker, fake_data):
    
    # 1. Preparar os dados de teste
    usuario_valido = fake_data.email()
    senha_valida = fake_data.password()
    
    # 2. Mockar a função 'login'
    mocker.patch(
        'test_login.login',  # O mock deve ser feito no caminho do arquivo de teste
        return_value="sucesso"
    )

    # 3. Chamar a função mockada e validar o resultado
    resultado = login(usuario_valido, senha_valida)
    assert resultado == "sucesso", f"O resultado deveria ser 'sucesso', mas foi '{resultado}'"

def test_login_credenciais_incorretas(mocker, fake_data):
    
    # 1. Preparar os dados de teste
    usuario_invalido = fake_data.email()
    senha_incorreta = fake_data.password()

    # 2. Mockar a função 'login' com o retorno de erro
    mocker.patch(
        'test_login.login', # Mude para 'test_login.login'
        return_value="erro"
    )

    # 3. Chamar a função mockada e validar o resultado
    resultado = login(usuario_invalido, senha_incorreta)
    assert resultado == "erro", f"O resultado deveria ser 'erro', mas foi '{resultado}'"