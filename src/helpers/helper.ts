
import { 
    Client, 
    TextChannel,
    Message 
} from "discord.js";


export const helpers = {
    // Public helper get functions.
    get : {
        // TODO explore union types more VVVV
        channel : function(client: Client | Message, channelId: string) {
            if (client instanceof Client) {
                return (client.channels.cache.get(channelId) as TextChannel);
            }

            return (client.guild.channels.cache.get(channelId) as TextChannel);
        },
        member: function(msg: Message, userId : string){
            return (msg.guild.members.cache.get(userId));
        },
        user: function(client : Client, userId: string) {
            return client.users.cache.get(userId);
        },
        weenis: function(client : Client) {
            return client.users.cache.get('234961606759546880');
        }
    },
    // Public helper role check functions.
    isRole : {
        owner : function(msg: Message, userId: string) {
            return (msg.guild.ownerID == userId);
        }
    }
}


module.exports.get = helpers;