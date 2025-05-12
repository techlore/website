module Jekyll
  module DurationFilter
    def format_duration(seconds)
      hours = seconds / 3600
      minutes = (seconds % 3600) / 60
      seconds = seconds % 60

      if hours > 0
        format("%d:%02d:%02d", hours, minutes, seconds)
      else
        format("%d:%02d", minutes, seconds)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::DurationFilter)
