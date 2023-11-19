const handler = async (m, {conn}) => {
  m.reply(global.destraba);
};
handler.command = /^(Vs4|vs4|liga)$/i;
export default handler;

global.destraba = `
*⚜️ VS OFICIAL - 4 VS 4⚜️*

_HORA :_
•10 Pm 🇵🇪
•11 Pm 🇧🇴
•12 Am 🇦🇷🇨🇱

📱 
📱 
📱 
📱 

*⚠️SUPLENTES⚠️*
📱 
📱
`;
