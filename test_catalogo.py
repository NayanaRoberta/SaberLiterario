import pytest
from catalogo import getLivrosMaisAlugados

def test_retorno_array_com_5_elementos():
    
    livros = getLivrosMaisAlugados()
    assert isinstance(livros, list), "O retorno deve ser um array (lista)."
    assert len(livros) == 5, f"O array deveria conter 5 livros, mas retornou {len(livros)}."

def test_livros_possuem_campos_obrigatorios():
    
    livros = getLivrosMaisAlugados()
    for livro in livros:
        assert "titulo" in livro, "O livro não possui o campo 'titulo'."
        assert "autor" in livro, "O livro não possui o campo 'autor'."
        assert "alugueis" in livro, "O livro não possui o campo 'alugueis'."

def test_livros_estao_ordenados_corretamente():
   
    livros = getLivrosMaisAlugados()
    # Cria uma lista de alugueis para facilitar a comparação
    alugueis_esperados = [300, 250, 200, 180, 150]
    alugueis_retornados = [livro["alugueis"] for livro in livros]
    
    assert alugueis_retornados == alugueis_esperados, "Os livros não estão ordenados corretamente por alugueis."