import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  LinearProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Security as SecurityIcon,
  Lock as LockIcon,
  Speed as SpeedIcon,
  Storage as StorageIcon,
  Visibility as VisibilityIcon,
  CloudDone as CloudDoneIcon,
  Shield as ShieldIcon,
} from "@mui/icons-material";

function StatCard({
  title,
  value,
  icon,
  color,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Card
      elevation={4}
      sx={{
        height: "100%",
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: `${color}15`,
              color: color,
              mr: 2,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 700, color: color }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

function SecurityFeature({
  title,
  description,
  icon,
  progress,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
}) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        height: "100%",
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box sx={{ mr: 2, color: "primary.main" }}>{icon}</Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
        {description}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: "rgba(255, 87, 34, 0.1)",
          "& .MuiLinearProgress-bar": {
            borderRadius: 4,
            backgroundColor: "primary.main",
          },
        }}
      />
    </Paper>
  );
}

function Home() {
  const stats = [
    {
      title: "Protected Files",
      value: "128,532",
      icon: <LockIcon />,
      color: "#2196f3",
    },
    {
      title: "Encryption Rate",
      value: "99.9%",
      icon: <SecurityIcon />,
      color: "#4caf50",
    },
    {
      title: "Storage Used",
      value: "1.2 TB",
      icon: <StorageIcon />,
      color: "#ff9800",
    },
    {
      title: "Active Users",
      value: "45,289",
      icon: <ShieldIcon />,
      color: "#e91e63",
    },
  ];

  const features = [
    {
      title: "AES-256 Encryption",
      description:
        "Military-grade encryption for your sensitive data with zero-knowledge architecture.",
      icon: <SecurityIcon fontSize="large" />,
      progress: 100,
    },
    {
      title: "SHA-256 Hashing",
      description:
        "Secure hash algorithm ensuring data integrity and authenticity.",
      icon: <LockIcon fontSize="large" />,
      progress: 100,
    },
    {
      title: "Real-time Sync",
      description:
        "Instant synchronization across all your devices with end-to-end encryption.",
      icon: <CloudDoneIcon fontSize="large" />,
      progress: 95,
    },
    {
      title: "Performance Analytics",
      description:
        "Monitor your security status and storage usage in real-time.",
      icon: <SpeedIcon fontSize="large" />,
      progress: 90,
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: '100%',
        minHeight: '100vh',
        overflow: 'auto',
        paddingTop: '64px',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: 6,
          px: { xs: 2, sm: 4, md: 6 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            mb: 6,
            textAlign: "center",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: "linear-gradient(45deg, #FF5722 30%, #FF9100 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Secure Your Digital World
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              px: 2,
            }}
          >
            Advanced encryption technology to protect your most valuable data
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={6} lg={3} key={stat.title}>
              <StatCard {...stat} />
            </Grid>
          ))}
        </Grid>

        {/* Security Features */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
          }}
        >
          Enterprise-Grade Security
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid item xs={12} md={6} key={feature.title}>
              <SecurityFeature {...feature} />
            </Grid>
          ))}
        </Grid>

        {/* Privacy Badge */}
        <Box
          sx={{
            mt: 6,
            p: 3,
            textAlign: "center",
            borderRadius: 2,
            bgcolor: "rgba(255, 87, 34, 0.05)",
            border: "1px solid rgba(255, 87, 34, 0.1)",
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "primary.main",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Your Privacy is Our Priority
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            End-to-end encryption ensures that your data remains yours alone
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
