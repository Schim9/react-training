import {useContext} from 'react';
import {ThemeContext} from '../../Context/ThemeProvider.jsx';

export default function Container () {
  const {theme} = useContext (ThemeContext);
  const containerClass = `${theme === 'winter' ? 'bg-primary' : 'bg-warning'} flex align-items-center justify-content-center flex-column`;
  return (
    <div className={containerClass}>
      <h1>Changer le thème de cette application</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat autem quo quidem nesciunt eaque facilis iste eum illo non harum inventore nulla rem, corrupti ipsam sunt beatae, odio, ad possimus cum? Beatae commodi vitae fugit voluptatum iusto incidunt dicta impedit est ex laboriosam tenetur, maxime voluptates porro ad repudiandae! Voluptate saepe nisi id quidem illum vel nihil nesciunt repudiandae quasi at nemo et molestias, tenetur asperiores unde atque ad consectetur modi maiores. Quis laudantium inventore veritatis, vitae minus accusantium blanditiis sequi dolor labore qui nesciunt, similique consequuntur praesentium voluptas unde perspiciatis modi explicabo! Dolores corrupti id aliquam quos repellendus eius.
      </p>
    </div>
  );
}
