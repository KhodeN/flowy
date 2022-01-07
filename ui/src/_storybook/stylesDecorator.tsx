import '../index.css';

export function stylesDecorator(story: any) {
   return <>{story()}</>;
}
