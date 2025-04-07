import Inbox from "@/components/chat/Inbox";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full flex justify-start">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileCard />
          </TabsContent>
          <TabsContent value="chat">
            <Inbox/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
