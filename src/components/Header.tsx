import { GenreResponseProps } from '../App'

interface HeaderProps {
    selectedGenre: GenreResponseProps
}

export const Header = (props:HeaderProps) => (
    <header>
          <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>
)