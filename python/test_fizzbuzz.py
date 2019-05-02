from fizzbuzz import fizzbuzz


def test_input():
    assert fizzbuzz(1) == 1


def test_fizz():
    assert fizzbuzz(3) == 'fizz'
