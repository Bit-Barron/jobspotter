import React from "react";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View, Linking } from "react-native";
import { JobHook } from "~/components/hooks/job-hook";
import { Text } from "~/components/ui/text";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export default function JobDetails() {
  const { id } = useLocalSearchParams();
  const { jobQuery } = JobHook(id as string, "job-details");

  if (jobQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (jobQuery.isError) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Error loading job details</Text>
      </View>
    );
  }

  const job = jobQuery.data || {};

  const openGoogleLink = () => {
    if (job.job_google_link) {
      Linking.openURL(job.job_google_link);
    }
  };

  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Card className="mb-4">
        <View className="p-4">
          <Text className="text-2xl font-bold mb-2">
            {job.job_title || "Job Title Not Available"}
          </Text>
          <Text className="text-muted-foreground mb-2">
            {job.job_publisher || "Publisher Not Available"}
          </Text>
          <Text className="mb-2">
            Location: {job.job_state || "N/A"}
            (Lat: {job.job_latitude || "N/A"}, Long:{" "}
            {job.job_longitude || "N/A"})
          </Text>
          <Text className="mb-2">
            Type: {job.job_employment_type || "Not Specified"}
          </Text>
          <Text className="mb-2">
            Remote:{" "}
            {job.job_is_remote !== undefined
              ? job.job_is_remote
                ? "Yes"
                : "No"
              : "Not Specified"}
          </Text>
          <Text className="mb-2">
            Posted:{" "}
            {job.job_posted_at_datetime_utc
              ? new Date(job.job_posted_at_datetime_utc).toLocaleDateString()
              : "Date Not Available"}
          </Text>
          <Button
            className="w-full mb-2"
            onPress={openGoogleLink}
            disabled={!job.job_google_link}
          >
            <Text className="text-white">Apply</Text>
          </Button>
        </View>
      </Card>

      <Card className="mb-4">
        <View className="p-4">
          <Text className="text-xl font-semibold mb-2">Job Details</Text>
          <Text className="mb-2">
            Industry: {job.job_naics_name || "Not Specified"}
          </Text>
          <Text className="mb-2">
            NAICS Code: {job.job_naics_code || "Not Available"}
          </Text>
          <Text className="mb-2">
            ONET Job Zone: {job.job_onet_job_zone || "Not Specified"}
          </Text>
          <Text className="mb-2">
            ONET SOC: {job.job_onet_soc || "Not Available"}
          </Text>
          <Text className="mb-2">
            Language: {job.job_posting_language || "Not Specified"}
          </Text>
        </View>
      </Card>

      <Card className="mb-4">
        <View className="p-4">
          <Text className="text-xl font-semibold mb-2">Required Education</Text>
          <Text>
            {job.job_required_education
              ? JSON.stringify(job.job_required_education)
              : "No specific education requirements listed"}
          </Text>
        </View>
      </Card>

      <Card className="mb-4">
        <View className="p-4">
          <Text className="text-xl font-semibold mb-2">
            Required Experience
          </Text>
          <Text>
            {job.job_required_experience
              ? JSON.stringify(job.job_required_experience)
              : "No specific experience requirements listed"}
          </Text>
        </View>
      </Card>

      <Card className="mb-4">
        <View className="p-4">
          <Text className="text-xl font-semibold mb-2">Job Description</Text>
          <Text>{job.job_description || "Job description not available"}</Text>
        </View>
      </Card>

      <Card className="mb-4">
        <View className="p-4">
          <Text className="text-xl font-semibold mb-2">
            Equal Opportunity Statement
          </Text>
          <Text>
            {job.job_description &&
            job.job_description.includes(
              "McDonald's is an equal opportunity employer"
            )
              ? job.job_description.split(
                  "McDonald's is an equal opportunity employer"
                )[1]
              : "Equal opportunity statement not available"}
          </Text>
        </View>
      </Card>

      <Text className="text-xs text-muted-foreground text-center">
        Job ID: {job.job_id || "Not Available"}
      </Text>
    </ScrollView>
  );
}
