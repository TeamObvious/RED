const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*ACTIVENSE PLANTAS D' MRD 🌱* ${pesan}`;
  let teks = `👹 𝗧𝗘𝗔𝗠 𝗥𝗘𝗗 👹\n\n ${oi}\n\n👹  *@SamuraiBot*\n`;
  for (const mem of participants) {
    teks += `👹  @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n\n👹 𝗧𝗘𝗔𝗠 𝗥𝗘𝗗 👹`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
