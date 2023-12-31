import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Exercises that target the same muscle group
        </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative', justifyContent: 'center' }}>
         {targetMuscleExercises.length ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
        <Loader />
        )}
      </Stack>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Exercises that target the same equipment
        </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative', justifyContent: 'center' }}>
         {equipmentExercises.length ? (
        <HorizontalScrollbar data={equipmentExercises} />
        ) : (
        <Loader />
        )}
      </Stack>
    </Box>
  )
}

export default SimilarExercises;