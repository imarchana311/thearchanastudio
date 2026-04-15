import { useState, useMemo } from 'react';
import { format, addDays, startOfToday, isSameDay, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isPast, isToday } from 'date-fns';
import { enUS, hi, gu } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Clock, CheckCircle2, Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { handleError } from '../lib/error-handler';

const timeSlots = [
  { time: '10:00 AM', period: 'morning' },
  { time: '11:00 AM', period: 'morning' },
  { time: '12:00 PM', period: 'afternoon' },
  { time: '01:00 PM', period: 'afternoon' },
  { time: '02:00 PM', period: 'afternoon' },
  { time: '03:00 PM', period: 'afternoon' },
  { time: '04:00 PM', period: 'afternoon' },
  { time: '05:00 PM', period: 'evening' },
  { time: '06:00 PM', period: 'evening' },
  { time: '07:00 PM', period: 'evening' },
];

export default function BookingSystem() {
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(addDays(startOfToday(), 1));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentLocale = useMemo(() => {
    switch (i18n.language) {
      case 'hi': return hi;
      case 'gu': return gu || enUS; // Fallback to enUS if gu is not available in this version
      default: return enUS;
    }
  }, [i18n.language]);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleBooking = async () => {
    if (selectedDate && selectedTime) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Randomly fail for demonstration (10% chance)
            if (Math.random() < 0.1) {
              reject(new Error('The booking server is currently busy. Please try again in a few moments.'));
            } else {
              resolve(true);
            }
          }, 1500);
        });
        setIsBooked(true);
      } catch (error) {
        handleError(error, 'BookingSystem');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isBooked) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-12 text-center shadow-xl border border-primary/5"
      >
        <CheckCircle2 className="w-20 h-20 text-secondary mx-auto mb-6" />
        <h2 className="font-headline text-3xl text-primary mb-4">{t('booking.success')}</h2>
        <p className="text-on-surface-variant mb-8">{t('booking.successDesc')}</p>
        <div className="bg-primary-container/30 p-6 rounded-xl inline-block text-left">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{t('booking.details')}</p>
          <p className="text-on-surface font-medium flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" /> {format(selectedDate, 'PPP', { locale: currentLocale })}
          </p>
          <p className="text-on-surface font-medium flex items-center gap-2 mt-1">
            <Clock className="w-4 h-4" /> {selectedTime}
          </p>
        </div>
        <button 
          onClick={() => setIsBooked(false)}
          className="block mx-auto mt-8 text-primary font-semibold hover:underline"
        >
          {t('booking.bookAnother')}
        </button>
      </motion.div>
    );
  }

  return (
    <div id="booking" className="bg-white rounded-2xl shadow-xl border border-primary/5 overflow-hidden">
      <div className="p-8 border-b border-outline-variant/30">
        <h2 className="font-headline text-2xl text-primary mb-2">{t('booking.title')}</h2>
        <p className="text-on-surface-variant text-sm">{t('booking.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Calendar Column */}
        <div className="p-8 border-r border-outline-variant/30">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-on-surface capitalize">{format(currentMonth, 'MMMM yyyy', { locale: currentLocale })}</h3>
            <div className="flex gap-2">
              <button onClick={handlePrevMonth} className="p-2 hover:bg-surface-variant rounded-full transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={handleNextMonth} className="p-2 hover:bg-surface-variant rounded-full transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'].map(day => (
              <div key={day} className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                {t(`booking.days.${day}`)}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for padding */}
            {Array.from({ length: startOfMonth(currentMonth).getDay() }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            
            {daysInMonth.map((day) => {
              const isDisabled = isPast(day) && !isToday(day);
              const isSelected = isSameDay(day, selectedDate);
              
              return (
                <button
                  key={day.toString()}
                  disabled={isDisabled}
                  onClick={() => {
                    setSelectedDate(day);
                    setSelectedTime(null);
                  }}
                  className={`
                    aspect-square rounded-lg text-sm font-medium transition-all flex items-center justify-center
                    ${isDisabled ? 'text-neutral-300 cursor-not-allowed' : 'hover:bg-primary/5 text-on-surface'}
                    ${isSelected ? 'bg-primary text-white hover:bg-primary shadow-lg shadow-primary/20' : ''}
                  `}
                >
                  {format(day, 'd')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots Column */}
        <div className="p-8 bg-surface-variant/10">
          <div className="flex items-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-secondary" />
            <h3 className="font-bold text-on-surface">{t('booking.availableSlots')}</h3>
          </div>

          <div className="space-y-6">
            {['morning', 'afternoon', 'evening'].map(period => (
              <div key={period}>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  {t(`booking.${period}`)}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots
                    .filter(slot => slot.period === period)
                    .map(slot => (
                      <button
                        key={slot.time}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`
                          py-3 px-4 rounded-xl text-sm font-medium border transition-all
                          ${selectedTime === slot.time 
                            ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/20' 
                            : 'bg-white border-outline-variant hover:border-secondary text-on-surface'}
                        `}
                      >
                        {slot.time}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              disabled={!selectedDate || !selectedTime || isSubmitting}
              onClick={handleBooking}
              className={`
                w-full py-4 rounded-xl font-bold tracking-wide transition-all flex items-center justify-center gap-2
                ${selectedDate && selectedTime && !isSubmitting
                  ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95' 
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'}
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                t('booking.confirm')
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
