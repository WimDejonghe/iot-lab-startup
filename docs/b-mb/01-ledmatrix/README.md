# Led matrix

Deze functies hebben specifieke betrekking tot de onboard sensoren en actuatoren.

```python
from microbit import *
display.show(<nummer>)
display.scroll(<nummer>)
display.show(Image( '90900:'#helderheid individuele LED's
                    '09990:'
                    '00909:'
                    '09090:'
                    '90090:'
                    ))
```
Toon hiermee 1 cijfer en experimenteer met getallen bestaande uit meerdere cijfers.

**Toon 1 keer een getal:**

```python
from microbit import *

display.scroll(1234)
```
**Herhaal telkens de weergave van een getal:**

```python
from microbit import *

while True:
  display.scroll(1234)
```
![example image](./images/whileloop.png "De While Loop")