from pathlib import Path
path = Path('js/header-footer.js')
text = path.read_text(encoding='utf-8')
lines = [line for line in text.splitlines() if line.strip() != '']
path.write_text('\n'.join(lines).rstrip() + '\n', encoding='utf-8')
print('blank lines cleaned')
