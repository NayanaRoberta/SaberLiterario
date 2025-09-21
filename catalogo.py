def getLivrosMaisAlugados():
   
    # Exemplo de dados
    livros_mock = [
        {"titulo": "O Senhor dos Anéis", "autor": "J.R.R. Tolkien", "alugueis": 150},
        {"titulo": "1984", "autor": "George Orwell", "alugueis": 200},
        {"titulo": "Harry Potter e a Pedra Filosofal", "autor": "J.K. Rowling", "alugueis": 300},
        {"titulo": "Dom Quixote", "autor": "Miguel de Cervantes", "alugueis": 90},
        {"titulo": "A Guerra dos Tronos", "autor": "George R.R. Martin", "alugueis": 250},
        {"titulo": "O Pequeno Príncipe", "autor": "Antoine de Saint-Exupéry", "alugueis": 180},
        {"titulo": "A Revolução dos Bichos", "autor": "George Orwell", "alugueis": 120},
    ]

    # Ordena os livros por 'alugueis' em ordem decrescente
    livros_ordenados = sorted(livros_mock, key=lambda livro: livro['alugueis'], reverse=True)
    
    # Retorna os 5 primeiros
    return livros_ordenados[:5]