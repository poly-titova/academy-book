<?php

try {
    intdiv(5, 0);
} catch (DivisionByZeroError $error) {
    print("На ноль делить нельзя!");
}
