
# app_autenticacao.py

def login(usuario, senha):
    
    if usuario == "usuario_valido@email.com" and senha == "senha_correta123":
        return "sucesso"
    else:
        return "erro"