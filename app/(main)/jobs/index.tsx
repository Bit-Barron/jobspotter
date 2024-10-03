import { View } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";

export default function Jobs() {
  const { jobQuery } = JobHook();
  console.log(jobQuery);
  return (
    <View>
      <Text>asd</Text>
    </View>
  );
}
