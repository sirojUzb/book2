import { Toggle } from "@/components/ui/toggle";

const Header = () => {
  return (
    <div className="flex gap-6">
      <Toggle>Bestsellerlar</Toggle>
      <Toggle>Top kitoblar</Toggle>
      <Toggle>Yangi kitoblar</Toggle>
      <Toggle>Chegirma</Toggle>
    </div>
  );
};

export default Header;
