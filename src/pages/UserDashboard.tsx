import WellnessNavigation from "@/components/WellnessNavigation";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <WellnessNavigation />
      <div className="pt-20 p-6">
        <h1 className="text-3xl font-bold">Min Wellness Dashboard</h1>
        <p className="text-muted-foreground mt-2">Kommer snart...</p>
      </div>
    </div>
  );
};

export default UserDashboard;