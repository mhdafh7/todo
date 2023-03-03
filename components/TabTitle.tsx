interface Props {
  name: string;
}
const TabItem = ({ name }: Props) => {
  return <button className="text-center px-3 py-1 bg-gray-300 rounded">{name}</button>;
};
export default TabItem;
