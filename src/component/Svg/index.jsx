import React from 'react';

function hasUpperase(str) {
  return /[A-Z]/.test(str);
}

const Svg = props => {
  const { className } = props;

  let name = className.split(' ').find(item => item.includes('icon-'));
  name = name ? name.split('icon-')[1] : '';

  if (hasUpperase(name)) {
    let caseLetter = '';
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) === name.charAt(i).toUpperCase()) {
        caseLetter = name.charAt(i);
        name = name.replace(caseLetter, `-${caseLetter.toLowerCase()}`);
      }
    }
  }

  const iconName = name
    ? require(`../../assets/images/${name}.svg`).default
    : '';

  let width = className.split(' ').find(item => item.includes('w-'));
  width = width ? width.split('-')[1] : 0;

  let height = className.split(' ').find(item => item.includes('h-'));
  height = height ? height.split('-')[1] : 0;

  return (
    <img
      src={iconName ? iconName : ''}
      className="icon"
      alt={`${name} icon`}
      style={{
        width: width ? `${width}px` : `100px`,
        height: height ? `${height}px` : `100px`,
      }}
      {...props}
    />
  );
};

export default Svg;
